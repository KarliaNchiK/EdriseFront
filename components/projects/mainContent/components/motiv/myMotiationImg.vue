<template>
  <div class="full-size p-relative img-container c-pointer">
    <img :src="src" class="img-triangle" />
    <div
      :class="{ 'op-1': show }"
      class="
        p-absolute
        img-content
        d-flex
        align-center
        justify-center
        text-m-title-2
        white--text
        full-size
      "
    >
      {{ word }}
    </div>
  </div>
  <!-- <v-img :src="src" class="img-content-container c-pointer">

  </v-img> -->
</template>


<script>
export default {
  props: ["src", "word", "show"],
};
</script>


<style lang="scss" scoped>
.img-container {
  &:hover {
    .img-content {
      opacity: 1 !important;
    }
    .img-triangle {
      transform: scale(1.2);
    }
  }
  .img-triangle {
    will-change: transform;
    transition: transform 0.6s ease;
    object-fit: cover;
    height: 100%;
    width: 100%;
  }
  .img-content {
    top: 0;
    left: 0;
    transition: opacity 0.5s ease;
    opacity: 0;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.2) 30%,
      rgba(0, 0, 0, 0.5) 100%
    );
  }
}
</style>