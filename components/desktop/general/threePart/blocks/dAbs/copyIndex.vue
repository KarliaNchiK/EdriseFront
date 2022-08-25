<template>
  <div class="p-relative overflow-hidden full-height">
    <v-fade-transition mode="out-in">
      <my-cursor v-if="visible" v-show="enter" />
    </v-fade-transition>
    <div class="div-m-c full-height d-flex flex-column">
      <p class="text-h4">Примеры разработанных страниц и инструментов</p>
      <div class="div-container-m-c flex-grow-1" ref="divMain">
        <card-project
          v-for="block in blocks"
          :key="block.title"
          v-bind="block"
          class="mb-4"
        ></card-project>
      </div>
    </div>
  </div>
</template>

<script>
import cardProject from "./cardProject.vue";
export default {
  props: ["visible"],
  components: {
    cardProject,
    myCursor: () => import("./myCursor.vue"),
  },
  data: () => ({
    blocks: [
      {
        to: "album",
        title: "Фотоальбом",
        info: "Фотоальбом учитывающий высоту фотографий",
        img: "images/ss/album.png",
      },
      {
        to: "chat",
        title: "Чат",
        info: "Страница чата",
        img: "images/ss/chat.png",
      },
      {
        to: "plans",
        title: "Доска планирования",
        info: "Доска для расставления планов",
        img: "images/ss/plans.png",
      },
      {
        to: "gant",
        title: "Диаграмма Ганта",
        info: "Реализация диаграммы Ганта",
        img: "images/ss/gant.png",
      },
      {
        to: "ads",
        title: "Доска объявлений",
        info: "Размещене объявлений проектов",
        img: "images/ss/projects.png",
      },
    ],
    enter: false,
  }),
  watch: {
    visible() {
      if (this.visible) {
        this.setListener();
        return;
      }
      this.clearListener();
    },
  },
  methods: {
    setListener() {
      this.$refs.divMain.addEventListener("mouseenter", this.mEnter);
      this.$refs.divMain.addEventListener("mouseleave", this.mLeave);
    },
    clearListener() {
      this.$refs.divMain.removeEventListener("mouseenter", this.mEnter);
      this.$refs.divMain.removeEventListener("mouseleave", this.mLeave);
    },
    mEnter() {
      this.enter = true;
    },
    mLeave() {
      this.enter = false;
    },
  },
  mounted() {
    this.setListener();
  },
  beforeDestroy() {
    this.clearListener();
  },
};
</script>


<style lang="scss" scoped>
.div-m-c {
  margin-top: 5vh;
  padding: 0 5vw 0 5vw;

  & > .div-container-m-c {
    cursor: none;
    margin-top: 5vh;
    padding-bottom: 10%;
  }
}
</style>