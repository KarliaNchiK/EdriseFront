<template>
  <div class="bus-card d-flex align-center">
    <div class="d-flex flex-column justify-center text-right">
      <div class="text-m-h5 ff-poppins d-flex align-end justify-end">
        <logo-svg class="logoSvg" />
        <p>EDRISE</p>
      </div>
      <div class="text-m-title-1"><p>Fullstack разработчик</p></div>
    </div>
    <div></div>
    <div class="d-flex flex-column justify-space-between text-right">
      <div class="text-m-h6">Фаттахов Айнур</div>
      <div class="text-m-subtitle-1">
        <p><strong>Б</strong>есплатная консультация</p>
        <p><strong>В</strong>заимовыгодные условия</p>
      </div>
      <div class="text-m-subtitle-1">
        <p><v-icon>mdi-phone-outline</v-icon> +7 9656 09 54 93</p>
        <p>
          <v-icon>mdi-email-arrow-right-outline</v-icon> karlianchik@gmail.com
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import logoSvg from "~/components/mySvg/logoSvg.vue";
export default {
  components: {
    logoSvg,
  },
};
</script>

<style lang="scss" scoped>
.bus-card {
  height: 25vmax;
  width: 50vmax;
  min-height: 200px;
  background: var(--v-inversColorText-base);
  padding: 1.7vmax;

  p {
    color: var(--v-colorText-base);
  }

  .logoSvg {
    margin-right: 10px;
    width: 5vmax;
  }

  & > div {
    height: 80%;
  }

  & > div:nth-child(1) {
    width: 23.05vmax;
    padding: 0 2vmax 6vmax 0;
  }
  & > div:nth-child(2) {
    background: var(--v-mainSecondColor-base);
    border-radius: 24px;
    width: 0.5vmax;
  }
  & > div:nth-child(3) {
    width: 23.05vmax;

    i {
      font-size: 1.8vmax;
      margin-right: 1vmax;
      color: var(--v-mainSecondColor-base);
    }
  }
}
</style>