<template>
  <div
    class="p-absolute user-task mt-1 px-1 pb-1 e-all"
    :class="[{ 'd-none': width == 0 }]"
    :style="[
      { width: width * widthCeil + '%' },
      { left: (x < 0 ? 0 : x) * widthCeil + '%' },
      { top: (task.y - 1) * 5 + 'vmax' },
    ]"
    :x="x >= 0 ? x : 0"
    :width="width"
  >
    <div
      class="pa-2 rounded-lg e-none d-flex d-md-block  overflow-hidden"
      :class="`type-border-${task.important}`"
    >
      <p class="text-m-subtitle-1 black--text task-title">
        {{ task.title }}
      </p>
      <p>
        <v-icon class="icon-imp">mdi-progress-alert</v-icon>
      </p>
    </div>
  </div>
</template>

<script>
import { format } from "date-fns";
export default {
  props: ["task", "widthCeil", "currentDay", "days"],
  data: () => ({}),
  computed: {
    x() {
      return (
        format(this.task.dateStart, "D", {
          useAdditionalDayOfYearTokens: true,
        }) - this.currentDay
      );
    },
    width() {
      let width = 0,
        days = this.task.days,
        x = this.x;
      if (x < 0) {
        days = days + x;
        x = 0;
      }
      if (x + days > this.days) {
        width = this.days - x;
      } else {
        width = days;
      }
      return width < 0 ? 0 : width;
    },
  },
  beforeUpdate() {
    this.$el.style.transition = "";
  },
};
</script>

<style lang="scss" scoped>
$height: 5vmax;
$colorArr: (
  rgba(250, 30, 30, 0.4),
  rgba(250, 136, 30, 0.4),
  rgba(63, 250, 30, 0.4)
);
.type-border {
  @for $i from 1 through 3 {
    $color: nth($colorArr, $i);
    &-#{$i} {
      border-color: $color !important;
      box-shadow: inset 0 0 2px $color;

      .icon-imp {
        color: $color;
      }
    }
  }
}
.user-task {
  &:active {
    z-index: 6;
    pointer-events: none !important;
    transition: none !important;
  }
  cursor: pointer;
  z-index: 5;
  pointer-events: all;
  will-change: transform;
  height: $height;
  box-sizing: border-box;

  & > div {
    box-sizing: border-box;
    height: 100%;
    border: 1px solid;
    background: linear-gradient(
      135deg,
      rgba(255, 255, 255, 0.9) 50%,
      rgba(60, 186, 218, 0.3)
    );

    & * {
      pointer-events: none;
    }
  }
}
</style>