<template>
  <div
    class="pb-8 p-relative d-flex flex-column justify-space-between"
    id="startSecondPart"
  >
    <div v-for="item in items" :key="item.blocks.length">
      <div class="text-m-title-1 font-weight-medium mt-4 ml-2">
        {{ item.title }}
      </div>
      <div class="d-flex flex-wrap">
        <my-item
          class="mr-2"
          v-for="bl in item.blocks"
          :key="bl.title"
          :title="bl.title"
          :icon="bl.icon"
          :color="bl.color"
          :warn="bl.warn"
        />
      </div>
    </div>
  </div>
</template>

<script>
import myItem from "~/components/ui/myItem.vue";
import { technology } from "~/static/const/const.js";
export default {
  components: {
    myItem,
  },
  created() {
    this.items = technology;
  },
};
</script>