<template>
  <div class="d-flex flex-column full-size text-body-1">
    <div class="text-m-title-2 font-weight-medium">
      {{ title }}
    </div>
    <div class="mt-md-4 text-m-body-2 mt-2">
      {{ text }}
    </div>
    <div class="mt-2 div-img-reColor flex-grow-1 py-4">
      <img-re-color
        :img="img"
        :imgGrey="imgGrey"
        :mobile="false"
        size="8vw"
        class="elevation-2"
      />
    </div>
    <div class="my-md-4 mt-2 text-m-subtitle-1 font-italic">
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