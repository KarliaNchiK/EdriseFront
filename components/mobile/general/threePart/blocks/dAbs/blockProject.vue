<template>
  <div
    class="p-relative row-comps rounded-xl"
    @click="
      $router.push({
        path: '/project',
        query: {
          comp: to,
        },
      })
    "
  >
    <div class="d-flex">
      <p class="text-m-title-1 white--text pt-1 p-vertical">
        {{ title }}
      </p>
      <img :src="img" class="rounded-t-xl elevation-2" />
    </div>
    <div class="proj-card-content">
      <v-divider></v-divider>

      <p class="text-m-subtitle-2 pt-4 white--text pl-2">
        {{ info }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["info", "title", "img", "to"],
};
</script>

<style lang="scss" scoped>
.p-vertical {
  width: 15%;
  writing-mode: vertical-rl;
  transform: rotateZ(180deg) translateY(4vh) translateX(55%);
  transform-box: fill-box;
  transform-origin: center right;
  filter: drop-shadow(0 0 1px rgb(175, 175, 175));
}
.row-comps {
  width: 100%;
  height: 25vh;
  margin-bottom: 10vh;
  background: linear-gradient(325deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  box-shadow: -2px -2px 5px rgba(99, 99, 252, 0.5), 1px 1px 3px grey,
    0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%),
    0px 1px 10px 0px rgb(0 0 0 / 12%);

  img {
    transform: translateY(-4vh);
    object-fit: cover;
    height: 20vh;
    max-width: 80%;
  }

  .proj-card-content {
    transform: translateY(-3vh);

    p:first-child {
      padding-left: 10%;
    }
  }
}
</style>