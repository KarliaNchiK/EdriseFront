<template>
  <div>
    <v-btn @click="switchView" outlined color="success" class="ml-3 my-4">
      Изменить вид
    </v-btn>
    <div class="d-flex" :style="`--height:${heightBlock}px`">
      <div
        v-for="(arrayImg, n) in imgs"
        :key="n"
        ref="block"
        class="px-lg-3 px-1 column-album full-height"
      >
        <div
          class="mb-lg-6 mb-2 c-pointer d-flex justify-center"
          v-for="img in arrayImg"
          :key="img.src"
        >
          <img
            :src="img.src"
            class="album-img elevation-2 full-width"
            :class="{ 'alternate-view': active }"
            :style="`--heightImg:${img.h}px`"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { projectImgs } from "~/plugins/const.js";
export default {
  props: {
    deleteCustom: {
      default: null,
    },
  },
  data: () => ({
    photos: [],
    imgs: [],
    heightImg: [0, 0, 0],
    active: false,
    mount: false,
    heightBlock: 0,
  }),
  computed: {
    blockWidth() {
      return this.$refs.block[0].clientWidth - 24;
    },
    isMobile() {
      return this.$store.getters["device/mobile"];
    },
  },
  methods: {
    async loadImg(img) {
      return new Promise((resolve, reject) => {
        var timg = new Image();
        var width = this.blockWidth;

        timg.onload = function () {
          var l = width / this.width;
          resolve(Math.ceil(timg.height * l));
        };
        timg.src = img;
      });
    },

    minH() {
      var min = this.heightImg[0],
        ind = 0;
      for (let a = 1; a < this.imgs.length; a++) {
        if (this.heightImg[a] < min) {
          min = this.heightImg[a];
          ind = a;
        }
      }
      return ind;
    },

    async initPhoto() {
      let a = 0,
        h = 0;
      for (let img of this.photos) {
        a = this.minH();
        this.heightImg[a] += h = await this.loadImg(img);
        this.imgs[a].push({
          src: img,
          h: h,
        });
      }
    },

    switchView() {
      this.heightBlock = this.blockWidth;
      this.active = !this.active;
    },
  },
  async mounted() {
    this.initPhoto();
  },
  created() {
    this.imgs = this.isMobile ? [[], []] : [[], [], []];
    this.photos = projectImgs;
  },
};
</script>

<style lang="scss" scoped>
.album-img {
  transition: all 0.5s ease;
  object-fit: cover;
  height: var(--heightImg);
}
.alternate-view {
  height: var(--height) !important;
}

@media (min-width: 960px) {
  .column-album {
    width: calc(100% / 3);
  }
}

@media (max-width: 960px) {
  .column-album {
    width: 50%;
  }
}
</style>