<template>
  <div class="full-size">
    <circle-svg
      v-for="(card, n) in cards"
      :key="n"
      :value="card.value"
      :icon="card.icon"
      :color1="card.color1"
      :color2="card.color2"
      :text="card.text"
      :n="n"
    />
  </div>
</template>


<script>
import circleSvg from "~/components/mySvg/circleSvg.vue";
export default {
  components: {
    circleSvg,
  },
  data: () => ({
    cards: [
      {
        value: 93,
        icon: "fa-solid fa-brain",
        color1: "hsl(320, 100%, 60%)",
        color2: "hsl(335, 100%, 60%)",
        text: "Находчивость",
      },
      {
        value: 83,
        icon: "fa-solid fa-dumbbell",
        color1: "hsl(335, 100%, 60%)",
        color2: "hsl(350, 100%, 60%)",
        text: "Спортивный",
      },
      {
        value: 90,
        icon: "fa-solid fa-people-group",
        color1: "hsl(350, 100%, 60%)",
        color2: "hsl(5, 100%, 60%)",
        text: "Коммуникативность",
      },

      {
        value: 85,
        icon: "fa-solid fa-handshake-angle",
        color1: "hsl(5, 100%, 60%)",
        color2: "hsl(20, 100%, 60%)",
        text: "Деловое общение",
      },
    ],
  }),
};
</script>