<template>
  <div class="d-flex div-block-photo overflow-hidden white p-relative">
    <div
      class="overflow-hidden p-relative"
      :style="`min-width:${width}px; min-height:${height}px;`"
    >
      <div class="full-size p-absolute c-pointer z-5">
        <div class="full-size d-flex">
          <div
            @click="sdvig(-1)"
            class="full-height d-flex align-center pl-4 gradient-right col-6"
          >
            <v-icon color="white"> mdi-arrow-left </v-icon>
          </div>
          <div
            @click="sdvig(1)"
            class="d-flex align-center justify-end gradient-left pr-4 col-6"
          >
            <v-icon color="white"> mdi-arrow-right </v-icon>
          </div>
        </div>
      </div>
      <div
        class="
          brown
          lighten-5
          p-relative
          full-size
          d-flex
          justify-center
          align-center
          flex-shrink-1
        "
      >
        <img
          ref="img"
          :key="img.name"
          :src="`${path + img.name}`"
          class="img-card-photo p-absolute"
          @load="sizeSave"
        />
      </div>
    </div>
    <div
      class="full-heigth d-flex flex-column p-relative my-border-left"
      style="width: 400px"
    >
      <div class="pa-4 text-m-subtitle-1 font-weight-medium">
        <v-icon :color="img.color" class="pr-2">mdi-airballoon-outline</v-icon>
        {{ img.title }}
      </div>
      <my-divider anim />
      <div class="pa-4 text-m-body-2">
        <v-icon :color="img.color" class="pr-2">mdi-card-text-outline</v-icon>
        {{ img.info }}
      </div>
    </div>
  </div>
</template>

<script>
import myDivider from "./myDivider.vue";
export default {
  props: ["n", "path", "imgs"],
  components: {
    myDivider,
  },
  data: () => ({
    width: 200,
    height: 400,
    swap: 0,
    load: true,
    transition: "v-slide-x-reverse-transition",
  }),
  computed: {
    img() {
      return this.imgs[this.swap];
    },
  },
  methods: {
    resize() {
      this.width = 200;
      this.height = 400;
      this.sizeSave();
    },
    sizeSave() {
      if (this.$refs.img == undefined) return;
      if (this.$refs.img.clientWidth > this.width) {
        this.width = this.$refs.img.clientWidth;
      }
      if (this.$refs.img.clientHeight > this.height) {
        this.height = this.$refs.img.clientHeight;
      }
      this.load = false;
    },
    sdvig(n) {
      this.transition =
        n == 1 ? "v-slide-x-reverse-transition" : "v-slide-x-transition";
      this.load = true;
      this.swap += n;
      let len = this.imgs.length;
      if (this.swap < 0) this.swap += len;
      else if (this.swap == len) {
        this.swap = 0;
      }
    },
  },
  mounted() {
    this.swap = this.n;
    window.addEventListener("resize", this.resize);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.resize);
  },
};
</script>

<style lang="scss" scoped>
.img-card-photo {
  max-height: 100%;
  object-fit: contain;
  user-select: none;
}

.div-block-photo {
  min-width: 40vw;
  min-height: 60vh;
}

.gradient-left,
.gradient-right {
  transition: all 0.3s ease;
  opacity: 0;
}
.gradient-right {
  background: linear-gradient(to right, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0));
}
.gradient-left {
  background: linear-gradient(to left, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0));
}
.gradient-left:hover,
.gradient-right:hover {
  opacity: 1;
}

@media (min-width: 960px) {
  .img-card-photo {
    max-width: calc(80vw - 400px);
  }
  .div-block-photo {
    max-height: 80vh;
    max-width: 80vw;
  }
}
@media (max-width: 960px) {
  .img-card-photo {
    // max-width: calc(100vw - 400px);
    height: 100%;
    width: 100%;
  }
  .div-block-photo {
    height: 100vh;
    max-width: 100vw;
  }
}
</style>