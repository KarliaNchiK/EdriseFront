<template>
  <div>
    <block-educ
      v-for="educ in educs"
      :key="educ.name"
      :data="educ"
      class="mt-not-f-4"
    />
    <div class="mt-not-f-4 p-relative flex-grow-1 d-glass pa-4 pb-2">
      <div class="d-flex flex-column div-container-docs full-height">
        <p class="text-m-body-1 font-weight-medium">Дипломы и сертификаты</p>
        <div class="flex-grow-1 p-relative">
          <div class="d-flex div-docs pa-2 scroll-custom p-absolute full-size">
            <div
              class="p-relative c-pointer mr-4 "
              @click="activePhoto(item.name)"
              v-for="(item, n) in diploms"
              :key="n"
            >
              <img
                :src="`images/lowSizeDocs/${item.name}`"
                alt=""
                class="full-height doc-shadow"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <v-dialog v-model="diplom" v-if="diplom" width="unset">
      <card-photo :n="n" :imgs="diploms" path="images/docs2/" />
    </v-dialog>
  </div>
</template>

<script>
import blockEduc from "./educBlock.vue";
import { diploms, educs } from "~/plugins/const.js";
import sizeMix from "~/plugins/mixins/size.js";
export default {
  mixins: [sizeMix],
  components: {
    blockEduc,
    cardPhoto: () => import("~/components/ui/cardPhoto.vue"),
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
    box-sizing: border-box;
    @for $i from 1 through 9 {
      &:nth-child(#{$i}) {
        box-shadow: 0 0 3px hsl(350 + $i * 5, 100%, 50%);
      }
    }
  }
}

@media (min-width: 960px) {
  .div-docs {
    overflow-x: auto;
  }
}
</style>