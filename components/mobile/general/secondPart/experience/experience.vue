<template>
  <div no-gutters class="p-relative full-height">
    <div class="d-flex">
      <div class="py-1 py-md-2">
        <p class="text-naw-title font-weight-medium">
          Фаттахов Айнур Джамилевич
        </p>
        <p class="text-naw-subtitle colorSubtitleText--text">
          Возраст 22 года. Есть 2 патента
        </p>
        <p class="text-naw-subtitle colorSubtitleText--text">
          +7 965 609 54 93
        </p>
      </div>
      <drag-img />
    </div>
    <my-divider></my-divider>
    <div class="p-relative mt-md-8 mt-4">
      <main-content />
    </div>
    <my-divider class="mt-4"></my-divider>
    <right-block />
  </div>
</template>

<script>
import rightBlock from "./rightBlock/index.vue";
import mainContent from "./mainContent/index.vue";
import dragImg from "./dragImg.vue";
import sizeMix from "~/plugins/mixins/size.js";
import MyDivider from "~/components/ui/myDivider.vue";
export default {
  mixins: [sizeMix],
  components: {
    rightBlock,
    mainContent,
    dragImg,
    MyDivider,
  },
  mounted(){
    console.log("expMount")
  }
};
</script>

<style lang="scss" scoped>
</style>
