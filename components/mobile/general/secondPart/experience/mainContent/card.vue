<template>
  <div class="d-flex flex-column full-size text-body-1">
    <div class="text-naw-title font-weight-medium">
      {{ title }}
    </div>
    <div class="mt-md-4 text-naw-subtitle mt-2">
      {{ text }}
    </div>
    <div class="py-3 d-flex justify-center">
      <slot></slot>
    </div>
    <div class="mt-md-4 mt-2 div-img-reColor">
      <img-re-color :img="img" :imgGrey="imgGrey" :mobile="true" size="8vw" />
    </div>
    <div class="my-md-4 mt-2 text-naw-subtitle font-italic">
      "{{ subtitle }}"
    </div>
  </div>
</template>

<script>
import imgReColor from "~/components/ui/imgReColor.vue";
export default {
  components: { imgReColor },
  props: ["title", "text", "img", "imgGrey", "subtitle"],
};
</script>


<style lang="scss" scoped>
.div-img-reColor {
  height: 30vh;
}
</style>