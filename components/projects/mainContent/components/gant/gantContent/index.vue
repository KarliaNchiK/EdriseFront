<template>
  <div class="mt-4">
    <time-line class="time-line" />
    <gant-lines />
  </div>
</template>

<script>
import timeLine from "./timeLine.vue";
import gantLines from "./users.vue";
export default {
  components: {
    timeLine,
    gantLines,
  },
};
</script>

<style lang="scss" scoped>
.time-line {
  width: 90%;
  margin-left: 10%;
}
</style>