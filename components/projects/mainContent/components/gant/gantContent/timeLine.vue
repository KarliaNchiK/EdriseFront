<template>
  <div ref="gantTimeLine">
    <div class="d-flex months-container">
      <div
        v-for="(month, i) in months"
        :key="'month_' + month"
        class="text-center cell text-capitalize text-truncate"
        :style="{ width: monthsWidth[i] * (100 / days) + '%' }"
      >
        <p>{{ formatMonths(i) }}</p>
      </div>
    </div>
    <div class="d-flex justify-space-between days-container">
      <div
        v-for="(n, i) in days"
        :key="'day_' + n"
        class="full-width text-center cell"
      >
        <p>
          {{ formatDay(i) }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import {
  format,
  addDays,
  addMonths,
  getDaysInMonth,
  differenceInCalendarMonths,
} from "date-fns";
import { ru } from "date-fns/locale";
export default {
  computed: {
    days() {
      return this.$store.getters["projects/gant/days"];
    },
    months() {
      return (
        differenceInCalendarMonths(
          addDays(new Date(), this.days - 1),
          new Date()
        ) + 1
      );
    },
    monthsWidth() {
      let widthMs = [],
        leftDays = this.days,
        dd,
        dayInM,
        widthM,
        date;
      do {
        date = addDays(new Date(), this.days - leftDays);
        dd = format(date, "dd");
        dayInM = getDaysInMonth(date);
        widthM = dayInM - dd + 1 < leftDays ? dayInM - dd + 1 : leftDays;
        widthMs.push(widthM);
        leftDays -= widthM;
      } while (leftDays != 0);
      return widthMs;
    },
  },
  methods: {
    formatDay(n) {
      return format(addDays(new Date(), n), "dd");
    },
    formatMonths(n) {
      return format(addMonths(new Date(), n), "LLLL", {
        locale: ru,
      });
    },
    scrollE(e) {
      e.preventDefault();
      let d = e.deltaY > 0 ? 1 : -1;
      this.$store.commit("projects/gant/set_days", d);
    },
  },
  mounted() {
    this.$refs.gantTimeLine.addEventListener("wheel", this.scrollE);
  },
};
</script>

<style lang="scss" scoped>
$colorBorder: rgba(128, 128, 128, 0.25);
.days-container {
  border-left: 1px solid $colorBorder;
  border-right: 1px solid $colorBorder;
  border-bottom: 1px solid $colorBorder;
}
.months-container {
  border: 1px solid $colorBorder;
}
.cell:not(:last-child) {
  border-right: 1px solid $colorBorder;
}
</style>