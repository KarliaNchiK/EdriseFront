<template>
  <div
    class="card-container c-pointer p-relative d-flex flex-shrink-1"
    :class="[
      { 'flex-grow-1 card-active': y == i && x == n },
      { 'card-off': x != null && y == i && x != n },
    ]"
    @click="activate"
  >
    <hover-img
      :imgLink="imgSrc"
      :data="item"
      :active="active"
      @move="move"
      :class="{ 'active-card': active }"
    />
  </div>
</template>

<script>
import hoverImg from "./hoverImg";
export default {
  props: ["item", "n", "i", "x", "y", "imgSrc"],
  components: {
    hoverImg,
  },
  computed: {
    active() {
      return this.y == this.i && this.x == this.n;
    },
  },
  methods: {
    move(way) {
      this.$emit("move", way);
    },
    activate() {
      if (!this.active) {
        this.$emit("activate", {
          n: this.n,
          i: this.i,
        });
      } else {
        this.$emit("activate", null);
      }
    },
  },
};
</script>

<style scoped>
.card-container {
  transition: all 0.5s ease;
  width: calc(100% / 3);
  height: 100%;
  box-sizing: border-box;
  padding: 1vmin;
}
.card-active {
  width: 60vw !important;
  padding-right: 0.5vmin !important;
}
.card-off {
  width: 0;
  overflow: hidden;
  padding: 0 !important;
}
</style>
