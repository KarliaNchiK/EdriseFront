<template>
  <canvas id="canvas" :style="`--opacity:${opacity}%;`"></canvas>
</template>

<script>
class Orb {
  constructor(data) {
    this.size = 10 + Math.random() * 8;
    this.angel = Math.random() * 360;

    this.radius =
      Math.random() * data.cfg.ringsCount * (data.ph / data.cfg.ringsCount);

    this.impact = this.radius / data.ph;
    this.velocity =
      data.cfg.minVelocity + Math.random() * data.cfg.minVelocity * this.impact;
    this.data = data;
  }

  refresh() {
    let radian = (this.angel * Math.PI) / 180,
      cos = Math.cos(radian),
      sin = Math.sin(radian),
      wImpact = this.data.pw * this.impact,
      offsetX = wImpact * cos,
      offsetY = wImpact * sin,
      paralaxX = (this.data.mx / this.data.cw) * 2 - 1,
      paralaxY = this.data.my / this.data.ch,
      x = this.data.cx + cos * (this.data.ph + this.radius) + offsetX,
      y =
        this.data.cy +
        sin * (this.data.ph + this.radius) -
        offsetY * paralaxY -
        paralaxX * offsetX,
      distToC = Math.hypot(x - this.data.cx, y - this.data.cy),
      distToM = Math.hypot(x - this.data.mx, y - this.data.my),
      mNear = distToM <= 50,
      mEffect = mNear ? (1 - distToM / 50) * 25 : 0,
      optic = sin * this.size * this.impact,
      size = (this.size + optic + mEffect) * (1 + this.data.cfg.scale),
      step = cos * this.data.cfg.color.step,
      l = this.data.cfg.color.l + step,
      h = this.data.cfg.color.start + step,
      color = `hsl(${h}, 100%, ${l}%)`;

    if (distToC > this.data.ph - 30 || sin > 0) {
      this.data.canvasCtx.strokeStyle =
        this.data.canvasCtx.fillStyle =
        this.data.canvasCtx.shadowColor =
          color;
      this.data.canvasCtx.shadowBlur = this.data.cfg.color.blur;
      this.data.canvasCtx.beginPath();
      this.data.canvasCtx.arc(x, y, size, 0, 2 * Math.PI);
      mNear ? this.data.canvasCtx.stroke() : this.data.canvasCtx.fill();
    }

    this.angel = (this.angel + this.velocity) % 360;
  }
}

import { debounce } from "vue-debounce";
export default {
  props: ["alternate"],
  data: () => ({
    cnv: null,
    canvasCtx: null,
    mx: 0,
    my: 0,
    cw: 0,
    ch: 0,
    cx: 0,
    cy: 0,
    ph: 0,
    pw: 0,
    orbsList: [],
    cfg: {
      orbsCount: 50,
      minVelocity: 0.06,
      ringsCount: 8,
      scale: 0,
      color: {},
    },
    opacity: null,
  }),
  computed: {
    startOpacity() {
      return this.$vuetify.theme.dark ? 80 : 50;
    },
    stepOpacity() {
      return this.startOpacity - 15;
    },
    msX() {
      return this.$store.getters["data/x"];
    },
    msY() {
      return this.$store.getters["data/y"];
    },
  },
  methods: {
    ScrollEvent() {
      let step = window.pageYOffset / window.innerHeight;
      this.opacity = this.startOpacity - step * this.stepOpacity;
      this.cfg.scale = step;
      let orbs = 50 - Math.round(40 * step),
        sdvigOrbs = this.orbsList.length - orbs;

      while (sdvigOrbs != 0) {
        if (sdvigOrbs > 0) {
          this.orbsList.pop();
          sdvigOrbs--;
        } else {
          this.orbsList.push(new Orb(this.$data));
          sdvigOrbs++;
        }
      }
    },
    switchTheme() {
      this.opacity = this.startOpacity;
      if (this.$vuetify.theme.dark) {
        this.cfg.color = {
          start: 25,
          step: 10,
          l: 60,
          blur: 20,
        };
        return;
      }
      this.cfg.color = {
        start: 360,
        step: 10,
        l: 65,
        blur: 6,
      };
    },
    loop() {
      requestAnimationFrame(this.loop);
      // this.canvasCtx.globalCompositeOperation = "normal";

      this.canvasCtx.clearRect(0, 0, this.cw, this.ch);
      // this.canvasCtx.globalCompositeOperation = "multiply";
      this.orbsList.map((orb) => orb.refresh());
    },

    async createStartdust() {
      let bottom = 0;
      if (window.scrollY > window.innerHeight) {
        bottom = 40;
        this.cfg.scale = 1;
        this.opacity = this.startOpacity - this.stepOpacity;
      }
      for (let i = 0; i < this.cfg.orbsCount - bottom; i++) {
        this.orbsList.push(new Orb(this.$data));
      }
    },
    resizeToDebounce() {
      this.resizeDebounce(this);
    },

    async resizeCanvas() {
      this.cnv.width = this.cw = window.innerWidth;
      this.cnv.height = this.ch = window.innerHeight;
      this.cx = window.innerWidth / 2;
      this.cy = window.innerHeight / 2;
      this.ph = this.cy * 0.35;
      this.pw = this.cx * 0.35;
      this.canvasCtx = await this.cnv.getContext("2d");
    },
    resizeDebounce: debounce((t) => {
      t.resizeCanvas();
    }, 500),

    move() {
      this.mx = this.msX;
      this.my = this.msY;
    },
  },
  mounted() {
    window.addEventListener("resize", this.resizeToDebounce);
    this.switchTheme();
    this.cnv = document.getElementById("canvas");
    this.resizeCanvas().then(() => {
      this.createStartdust();
      this.loop();
    });
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.resizeToDebounce);
  },
};
</script>

<style lang="scss" scoped>
canvas {
  opacity: var(--opacity);
  transition: opacity 0.1s ease;
}
</style>