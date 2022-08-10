<template>
  <div class="d-flex flex-column full-size text-body-1">
    <div class="text-m-title-2 font-weight-medium">
      {{ title }}
    </div>
    <div class="mt-md-4 text-m-body-2 mt-2">
      {{ text }}
    </div>
    <div class="py-3 d-flex justify-center">
      <slot></slot>
    </div>
    <div class="mt-md-4 mt-2 div-img-reColor">
      <img-re-color
        :img="img"
        :imgGrey="imgGrey"
        :mobile="false"
        size="8vw"
      />
    </div>
    <div class="my-md-4 mt-2 text-m-subtitle-1 font-italic">
      "{{ subtitle }}"
    </div>
  </div>
</template>

<script>
import imgReColor from "../../../../ui/imgReColor.vue";
export default {
  components: { imgReColor },
  props: ["title", "text", "img", "imgGrey", "subtitle"],
};
</script>


<style lang="scss" scoped>
@media (min-width: 960px) {
  .div-img-reColor {
    flex-grow: 1;
  }
}
@media (max-width: 960px) {
  .div-img-reColor {
    height: 30vh;
  }
}
</style>