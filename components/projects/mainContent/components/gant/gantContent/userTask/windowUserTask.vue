<template>
  <div class="dialog-user-task d-flex pa-4">
    <div class="setting-panel d-flex flex-column justify-space-between">
      <div>
        <p class="font-weight-medium text-m-title-1">Базовые настройки</p>
        <div
          class="d-flex flex-wrap setting-panel-base justify-space-between mt-4"
        >
          <btn-setting
            v-for="(btn, i) in btnsBase"
            :key="btn.title"
            v-bind="btn"
            :needSubtitle="true"
            :class="{ 'btn-active': activeBase == i }"
            @click.native="activeBase = i"
          />
        </div>
      </div>
      <div>
        <p class="font-weight-medium text-m-title-1">Быстрые действия</p>
        <div
          class="
            d-flex
            flex-wrap
            setting-panel-timeline
            justify-space-between
            mt-4
          "
        >
          <btn-setting
            v-for="(btn, i) in btnsTimeLine"
            :key="btn.title"
            v-bind="btn"
            :needSubtitle="false"
            :class="{ 'btn-active': activeBase == i + 4 }"
            @click.native="activeBase = i + 4"
          />
        </div>
      </div>
      <div class="p-relative">
        <p class="font-weight-medium text-m-title-1">Приоритет</p>
        <div
          class="
            white
            py-4
            mt-4
            setting-panel-color
            d-flex
            justify-space-around
          "
        >
          <span
            v-for="i in 3"
            :key="'color_' + i"
            :class="{ 'current-imp': task.important == i }"
            class="c-pointer"
            @click="task.important = i"
          ></span>
        </div>
      </div>
    </div>

    <div
      class="setting-view elevation-2 d-flex flex-column justify-center pa-8"
    >
      <p class="text-center text-m-title-1 mb-4">
        В этой демо версии функционал ограничен
      </p>
      <img
        src="https://free-png.ru/wp-content/uploads/2021/12/free-png.ru-138-340x340.png"
        alt=""
      />
    </div>
  </div>
</template>

<script>
import btnSetting from "./btnSetting.vue";
export default {
  components: {
    btnSetting,
  },
  props: ["task"],
  data: () => ({
    activeBase: -1,
    btnsBase: [
      {
        icon: "information-outline",
        title: "Описание",
        subtitle: "subtitle",
      },
      {
        icon: "account",
        title: "Исполнитель",
        subtitle: "subtitle",
      },
      {
        icon: "wrench-clock",
        title: "Время",
        subtitle: "subtitle",
      },
      {
        icon: "cog",
        title: "Другое",
        subtitle: "subtitle",
      },
    ],
    btnsTimeLine: [
      {
        icon: "check",
        title: "Завершить",
        subtitle: "subtitle",
        color: "#00b831",
      },
      {
        icon: "close",
        title: "Отказаться",
        subtitle: "subtitle",
        color: "#b80000",
      },
      {
        icon: "chat-outline",
        title: "Обсуждение",
        subtitle: "subtitle",
        color: "#34a1eb",
      },
      {
        icon: "help",
        title: "Помощь",
        subtitle: "subtitle",
        color: "#c2c2c2",
      },

      {
        icon: "file-document-multiple-outline",
        title: "Материалы",
        subtitle: "subtitle",
        color: "#a6a6a6",
      },
      {
        icon: "share-variant",
        title: "Поделиться",
        subtitle: "subtitle",
        color: "#3d3d3d",
      },
    ],
  }),
};
</script>

<style lang="scss" scoped>
$colorArr: (
  rgba(250, 30, 30, 0.6),
  rgba(250, 136, 30, 0.6),
  rgba(63, 250, 30, 0.6)
);
.dialog-user-task {
  $borderRadius: 8px;
  width: 65vw;
  height: 80vh;
  border-radius: $borderRadius;
  border: 1px solid grey;
  background: rgb(243, 239, 243);

  .setting-panel {
    width: 60%;
    padding-right: 16px;

    &-base {
      & > div {
        width: calc(50% - 8px);
        &:nth-child(1n + 3) {
          margin-top: 16px;
        }
      }
    }

    &-timeline {
      & > div {
        &:nth-child(1n + 4) {
          margin-top: 16px;
        }
        width: calc(100% / 3 - 8px);
      }
    }

    &-color {
      border-radius: $borderRadius;

      span {
        height: 5vh;
        width: 25%;
        border-radius: $borderRadius;
        transition: box-shadow 0.5s ease;
        @for $i from 1 through 3 {
          &:nth-child(#{$i}) {
            background: nth($colorArr, $i);
          }
        }
      }
      .current-imp {
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%),
          0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);

        &:before {
          content: "\F0134";
          display: inline-block;
          font: normal normal normal 24px/1 "Material Design Icons";
          font-size: inherit;
          text-rendering: auto;
          line-height: inherit;
          -webkit-font-smoothing: antialiased;
          color: white;
          font-size: calc(1vw + 1vw);
          line-height: 1;
          animation: create-before 0.5s ease 1 forwards;
        }
      }
    }
  }
  .setting-view {
    width: 40%;
    border-radius: $borderRadius;
    background: white;
  }
}

@keyframes create-before {
  from {
    opacity: 0;
    transform: rotate(180deg) scale(0.5);
  }
  to {
    opacity: 1 !important;
    transform: rotate(0) scale(1);
  }
}
</style>