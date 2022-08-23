<template>
  <div class="d-flex justify-space-between align-center px-2 py-1">
    <div class="d-flex align-center">
      <v-btn icon @click="changeDays(-1)"> <v-icon>mdi-minus</v-icon> </v-btn>
      <p class="mx-2">{{ days }}</p>
      <v-btn icon @click="changeDays(1)"> <v-icon>mdi-plus</v-icon> </v-btn>
    </div>
    <div class="d-flex gant-mode-text">
      <p
        class="mr-4 c-pointer"
        :class="{ 'gray-filter': !edit }"
        @click="changeEdit"
      >
        Редактирование
      </p>
      <p
        class="c-pointer"
        :class="{ 'gray-filter': !copy }"
        @click="changeCopy"
      >
        Копирование
      </p>
    </div>
    <div class="d-flex"></div>
  </div>
</template>

<script>
export default {
  computed: {
    days() {
      return this.$store.getters["projects/gant/days"];
    },
    copy() {
      return this.$store.getters["projects/gant/copy"];
    },
    edit() {
      return this.$store.getters["projects/gant/edit"];
    },
  },
  methods: {
    changeDays(way) {
      this.$store.commit("projects/gant/set_days", way);
    },
    changeEdit() {
      this.$store.commit("projects/gant/set_edit", !this.edit);
    },
    changeCopy() {
      if (!this.copy) {
        this.$store.commit("projects/gant/set_edit", true);
      }
      this.$store.commit("projects/gant/set_copy", !this.copy);
    },
  },
};
</script>

<style lang="scss" scoped>
.gray-filter {
  opacity: 0.4;
  &::before,
  &::after {
    filter: grayscale(1);
  }
}
.gant-mode-text {
  p {
    position: relative;
    transition: opacity 0.5s ease;
    &::before {
      content: "";
      position: absolute;
      width: 100%;
      height: 1px;
      left: 0;
      bottom: 0;
      transition: filter 0.5s ease;
    }
    &::after {
      content: "";
      position: absolute;
      width: 3px;
      height: 3px;
      left: -7px;
      top: 25%;
      border-radius: 50%;
      transition: filter 0.5s ease;
    }

    $colors: (
      1 rgba(46, 184, 238, 0.85) rgba(71, 202, 235, 0.5),
      2 rgba(46, 238, 46, 0.85) rgba(47, 238, 40, 0.5)
    );

    @each $i, $color, $colorSecond in $colors {
      &:nth-child(#{$i}) {
        &::before {
          background: $color;
          box-shadow: 0 0 2px $color, -2px 0 1px $colorSecond;
        }

        &::after {
          background: $color;
          box-shadow: 0 0 2px $color, 0 0 5px $colorSecond;
        }
      }
    }
  }
}
</style>