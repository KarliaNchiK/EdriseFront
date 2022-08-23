<template>
  <div class="overflow-y-auto scroll-custom left-panel">
    <v-navigation-drawer
      :mini-variant.sync="miniVariant"
      mini-variant-width="60px"
      width="240px"
      v-model="drawer"
      permanent
      style="flex: 1 0 auto"
    >
      <m-list :items="firstBlock" />
      <v-slide-x-transition>
        <div v-if="!miniVariant">
          <div
            style="width: 100%"
            class="pa-4 text-body-1 font-weight-bold text-truncate"
          >
            Фильтры
          </div>
          <filters />
        </div>
      </v-slide-x-transition>

      <v-slide-x-transition>
        <div
          v-if="!miniVariant"
          style="width: 100%"
          class="pa-4 text-body-1 font-weight-bold text-truncate"
        >
          Возможности
        </div>
      </v-slide-x-transition>
      <m-list :items="twoBlock" />

      <v-slide-x-transition>
        <div
          v-if="!miniVariant"
          style="width: 100%"
          class="pa-4 text-body-1 font-weight-bold text-truncate"
        >
          Обратная связь
        </div>
      </v-slide-x-transition>
      <m-list :items="endBlock" />
    </v-navigation-drawer>
  </div>
</template>


<script>
import mList from "./mList.vue";
import filters from "./filters";
export default {
  props: ["miniVariant"],
  components: {
    mList,
    filters,
  },
  data: () => ({
    drawer: true,
    firstBlock: [
      {
        icon: "home-outline",
        title: "Главная",
        action: "",
        color: "",
      },
      {
        icon: "cards-heart-outline",
        title: "Понравившиеся",
        action: "",
        color: "red",
      },
      {
        icon: "book-multiple-outline",
        title: "Мои проекты",
        action: "",
        color: "blue",
      },
      {
        icon: "progress-question",
        title: "Предложенные",
        action: "",
        color: "",
      },
      {
        icon: "clock-outline",
        title: "На рассмотрении",
        action: "",
        color: "",
      },
    ],
    filters: [
      {
        title: "Нужен наставник",
      },
      {
        title: "Есть видеоотчёты",
      },
      {
        title: "В поиске команды",
      },
    ],
    twoBlock: [
      {
        icon: "cog-outline",
        title: "Настройки ленты",
        action: "",
        color: "",
      },
    ],
    endBlock: [
      {
        icon: "minus-circle-outline",
        title: "Жалобы",
        action: "",
        color: "",
      },
      {
        icon: "clipboard-text-multiple-outline",
        title: "Справка",
        action: "",
        color: "",
      },
      {
        icon: "comment-edit-outline",
        title: "Отзыв",
        action: "",
        color: "",
      },
    ],
  }),
};
</script>

<style lang="scss" scoped>
.left-panel {
  position: sticky;
  top: 48px;
  left: 0;
  max-height: 80vh;
}
</style>