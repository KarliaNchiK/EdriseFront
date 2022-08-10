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
        src="pc/pictures/eye.jpg"
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
    mDown(e) {
      if (e.button != 0) return;
      this.$refs.dragImg.addEventListener("mousemove", this.mMove);
      this.$refs.divDrag.classList.remove("tr-03");
      this.x = e.x;
      this.down = true;
    },
    mMove(e) {
      if (this.down) {
        let sd = -this.x + e.x;
        if (this.$refs.divDrag.clientWidth / 2 > sd) {
          this.sdvig = sd > 0 ? sd : 0;
        }
      }
    },
    mUp(e) {
      if (this.down) {
        this.$refs.dragImg.removeEventListener("mousemove", this.mMove);
        this.$refs.divDrag.classList.add("tr-03");
        this.sdvig = 0;
        this.down = false;
      }
    },
  },
  mounted() {
    this.$refs.dragImg.addEventListener("mouseup", this.mUp);
    this.$refs.dragImg.addEventListener("mouseleave", this.mUp);
    this.$refs.divDrag.addEventListener("mousedown", this.mDown);
  },
  beforeDestroy() {
    this.$refs.dragImg.removeEventListener("mouseup", this.mUp);
    this.$refs.dragImg.removeEventListener("mouseleave", this.mUp);
    this.$refs.dragImg.removeEventListener("mousemove", this.mMove);
    this.$refs.divDrag.removeEventListener("mousedown", this.mDown);
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