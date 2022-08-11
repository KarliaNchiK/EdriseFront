<template>
  <div class="d-flex flex-column full-size">
    <div class="text-naw-title font-weight-medium">
      {{ title }}
    </div>
    <div class="text-m-body-1 my-2">
      {{ text }}
    </div>
    <div class="div-img-reColor">
      <img-re-color :img="img" :imgGrey="imgGrey" :mobile="true" size="8vw" />
    </div>
    <div class="mt-2 text-naw-subtitle font-italic">"{{ subtitle }}"</div>
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