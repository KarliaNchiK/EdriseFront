<template>
  <div
    class="ml-6 flex-grow-1 p-relative tr-03"
    style="user-select: none"
    :class="{ 'py-2': !down }"
    ref="dragImg"
  >
    <div
      class="div-draw full-height tr-03"
      :style="`--sdvig:${sdvig}px;`"
      ref="divDrag"
    >
      <img
        src="images/mobile/pictures/eye.jpg"
        class="full-size p-absolute"
        :draggable="false"
      />
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    sdvig: 0,
    down: false,
    x: 0,
  }),
  methods: {
    tDown(e) {
      e.stopPropagation();
      this.$refs.divDrag.classList.remove("tr-03");
      this.x = e.touches[0].clientX;
      this.down = true;
    },
    tMove(e) {
      e.stopPropagation();
      e.preventDefault();
      if (this.down) {
        let sd = -this.x + e.touches[0].clientX;
        if (this.$refs.divDrag.clientWidth / 2 > sd) {
          this.sdvig = sd > 0 ? sd : 0;
        }
      }
    },
    tUp(e) {
      e.stopPropagation();
      if (this.down) {
        this.$refs.divDrag.classList.add("tr-03");
        this.sdvig = 0;
        this.down = false;
      }
    },
  },
  mounted() {
    this.$refs.dragImg.addEventListener("touchend", this.tUp);
    this.$refs.dragImg.addEventListener("touchcancel", this.tUp);
    this.$refs.dragImg.addEventListener("touchmove", this.tMove);
    this.$refs.divDrag.addEventListener("touchstart", this.tDown);
  },
  beforeDestroy() {
    this.$refs.dragImg.removeEventListener("touchend", this.tUp);
    this.$refs.dragImg.removeEventListener("touchcancel", this.tUp);
    this.$refs.dragImg.removeEventListener("touchmove", this.tMove);
    this.$refs.divDrag.removeEventListener("touchstart", this.tDown);
  },
};
</script>

<style scoped lang="scss">
.tr-03 {
  transition: all 0.3s ease;
}
.div-draw {
  clip-path: inset(0 calc(50% - var(--sdvig)) 0 var(--sdvig));
  cursor: pointer;

  & > img {
    object-fit: cover;
  }
}
</style>