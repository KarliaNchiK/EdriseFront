<template>
  <div
    @mouseenter="endInit"
    @mouseleave="startInit"
    class="d-flex flex-column full-size justify-center mt-12"
  >
    <div
      v-for="(words, n) in massWords"
      :key="n"
      class="d-flex card-img-container"
    >
      <div
        v-for="(word, i) in words"
        :class="class_init(n * 5 + i + 1)"
        class="card-img"
        :key="i"
      >
        <test
          :src="imgs[n * 5 + i]"
          :word="word"
          :show="show.indexOf(n * 5 + i) != -1"
        />
      </div>
    </div>
    <div class="load-line" :class="{ 'load-line-offline': needLoad }"></div>
  </div>
</template>

<script>
import { projectImgs } from "~/plugins/const.js";
export default {
  components: {
    test: () => import("./myMotiationImg.vue"),
  },
  data: () => ({
    massWords: [
      ["Только", "Ты", "Создаёшь", "Своё", "Будущее"],
      ["Иди", "Вперед", "Не", "Бойся", "Преград"],
    ],
    imgs: [],
    show: [],
    arr: [
      [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      [0, 1, 5, 6],
      [1, 2, 4, 7, 8],
      [0, 6],
      [1, 2, 3, 4],
      [7, 8, 9],
      [1, 3, 7, 8],
      [0, 5, 7, 8],
      [6, 7, 8],
      [2, 3, 7, 8],
      [1, 3, 4, 7, 8],
    ],
    timeout: null,
    needLoad: false,
  }),
  methods: {
    class_init(n) {
      let a = n % 2 == 0 ? "trinagle-up" : "trinagle-down";
      let b = n % 5 != 1 ? "margin-l-50" : "";
      return a + " " + b;
    },
    init() {
      this.needLoad = false;
      this.timeout = setTimeout(() => {
        this.show = this.arr[Math.floor(Math.random() * this.arr.length)];
        this.init();
      }, 5000);
    },
    endInit() {
      this.needLoad = true;
      this.show = [];
      clearInterval(this.timeout);
    },
    startInit() {
      this.init();
    },
  },
  mounted() {
    this.init();
  },
  created() {
    this.imgs = projectImgs;
  },
};
</script>

<style lang="scss" scoped>
.card-img-container {
  margin-bottom: 0.5vw;
  .card-img {
    overflow: hidden;
    width: 40%;
  }
}
.margin-l-50 {
  margin-left: -15%;
}
.trinagle-up {
  clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
}
.trinagle-down {
  clip-path: polygon(50% 100%, 0 0, 100% 0);
}
.load-line {
  transition: width 5s ease;
  width: 100%;
  height: 1vh;
  background-color: grey;
  border-radius: 12px;
}
.load-line-offline {
  transition-duration: 0ms !important;
  width: 0% !important;
}

@media (min-width: 960px) {
  .card-img {
    height: 18vw;
  }
}
@media (max-width: 960px) {
  .card-img {
    height: 25vw;
  }
}
</style>