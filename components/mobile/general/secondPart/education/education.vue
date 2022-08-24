<template>
  <div class="p-relative full-height d-flex flex-column" ref="educBlock">
    <block-educ
      v-for="educ in educs"
      :key="educ.name"
      :data="educ"
      class="mt-not-f-4"
    />
    <div class="mt-not-f-4 p-relative div-container-docs">
      <p>Дипломы и сертификаты</p>
      <div class="d-flex justify-space-around mt-4">
        <div v-for="block in blocks" :key="block.name" class="column-docs">
          <div
            @touchstart.stop="activePhoto(item.name)"
            v-for="(item, n) in block"
            :key="n"
            class="p-relative elevation-4 div-doc d-flex"
            :class="{ 'active-img': item.name == name }"
          >
            <img
              :src="`images/lowSizeDocs/${item.name}`"
              alt=""
              class="img-docs"
            />
          </div>
        </div>
      </div>
    </div>
    <div v-if="diplom">
      <v-divider class="mb-4"></v-divider>
      <p class="text-m-subtitle-1 pb-2">
        {{ diploms[n].info }}
      </p>
      <div class="mt-4 div-img-dip-mobile d-flex align-center justify-center">
        <img :src="'images/docs2/' + diploms[n].name" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
import blockEduc from "./educBlock.vue";
import { diploms, educs } from "~/plugins/const.js";
export default {
  components: {
    blockEduc,
  },
  data: () => ({
    blocks: [[], []],
    diplom: false,
    n: null,
    name: "",
    educs: [],
    diploms: [],
    heightImg: [0, 0],
    blockWidth: 0,
  }),
  methods: {
    activePhoto(name) {
      this.n = this.diploms.findIndex((x) => x.name == name);
      this.name = name;
      this.diplom = true;
    },
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

    async initPhoto() {
      let min = 0;
      this.blockWidth = this.$refs.educBlock.clientWidth / 2;
      for (let img of this.diploms) {
        min = this.heightImg[0] < this.heightImg[1] ? 0 : 1;
        this.blocks[min].push(img);
        this.heightImg[min] += await this.loadImg(
          `images/lowSizeDocs/${img.name}`
        );
      }
    },
  },
  mounted() {
    this.diploms = diploms;
    this.educs = educs;
    this.initPhoto();
  },
};
</script>

<style lang="scss" scoped>
@use "~/assets/mixins.scss" as m;

.div-container-docs {
  & .column-docs {
    width: 45%;

    .active-img {
      & > .img-docs {
        box-shadow: 0px 0px 5px var(--v-mainFirstColor-base);
        position: relative;
      }

      &:before {
        content: "\F0046";
        font: normal normal normal 24px/1 "Material Design Icons";
        position: absolute;
        bottom: 0;
        left: calc(50% - 12px);
        z-index: 6;
        color: rgb(255, 51, 51);
        filter: drop-shadow(1px 2px 4px rgba(0, 0, 0, 0.4));
        animation: fab 0.5s linear infinite alternate forwards;
      }
    }

    & > .div-doc {
      margin-bottom: 5vmin;

      & > .img-docs {
        max-height: 100%;
        max-width: 100%;
        object-fit: cover;
      }
    }
  }
}

.div-img-dip-mobile {
  @include m.block-angel(25vmin, 4px, var(--v-mainSecondColor-base), 16px);
  width: 100%;
  & > img {
    max-height: 48vh;
    max-width: 100%;
    object-fit: contain;
  }
}

@keyframes fab {
  from {
    transform: scale(1.3) translateY(-20%);
  }
  to {
    transform: scale(1);
  }
}
</style>