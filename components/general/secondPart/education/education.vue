<template>
  <div ref="educBlock" class="pl-4">
    <block-educ
      v-for="educ in educs"
      :key="educ.name"
      :data="educ"
      class="mt-not-f-4"
    />
    <div class="mt-not-f-4 p-relative flex-grow-1 d-glass pa-4">
      <div class="d-flex flex-column div-container-docs full-height">
        <p class="text-m-body-1 font-weight-medium">Дипломы и сертификаты</p>
        <div class="flex-grow-1 pt-2 p-relative">
          <div class="d-flex div-docs pa-1 pb-4 scroll-custom p-absolute">
            <card-doc
              @click.native="activePhoto(item.name)"
              class="mr-md-4 doc-shadow"
              v-for="(item, n) in diploms"
              :key="n"
              :title="item.title"
              :name="item.name"
            />
          </div>
        </div>
      </div>
    </div>
    <v-dialog v-model="diplom" v-if="diplom" width="unset">
      <card-photo :n="n" :imgs="diploms" path="docs2/" />
    </v-dialog>
  </div>
</template>

<script>
import blockEduc from "./educBlock.vue";
import cardDoc from "./cardDoc.vue";
import { diploms, educs } from "~/plugins/const.js";
import sizeMix from "~/plugins/mixins/size.js";
export default {
  mixins: [sizeMix],
  components: {
    blockEduc,
    cardDoc,
    cardPhoto: () => import("../../../ui/cardPhoto.vue"),
  },
  data: () => ({
    diplom: false,
    n: null,
    educs: [],
    diploms: [],
  }),
  methods: {
    activePhoto(name) {
      this.n = this.diploms.findIndex((x) => x.name == name);
      this.diplom = true;
    },
  },
  mounted() {
    this.diploms = diploms;
    this.educs = educs;
  },
};
</script>

<style lang="scss" scoped>
@use "~/assets/mixins.scss" as m;

.div-container-docs {
  .doc-shadow {
    @for $i from 1 through 9 {
      &:nth-child(#{$i}) {
        box-shadow: 0 0 2px hsl(350 + $i * 5, 100%, 50%);
      }
    }
  }
}

@media (min-width: 960px) {
  .div-docs {
    height: 100%;
    width: 100%;
    overflow-x: auto;

    & > div {
      height: 100%;
    }
  }
}
</style>