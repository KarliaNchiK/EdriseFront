<template>
  <div>
    <div>
      <div
        class="
          white--text
          pa-3
          d-flex
          flex-column
          justify-space-between
          full-size
          card-in-image
        "
        :style="{ backgroundImage: `url(${imgProj})` }"
        @click="&quot;&quot;;"
      >
        <div
          :class="{ 'op-1': like }"
          class="d-flex justify-space-between align-center"
        >
          <div class="text-m-title-2 white--text">{{ type }}</div>
          <v-btn icon @click.stop="clickLike()">
            <v-icon :key="likeIcon" :color="like ? 'red' : ''">
              {{ likeIcon }}
            </v-icon>
          </v-btn>
        </div>

        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <div
              class="text-m-title-2 d-block text-truncate"
              v-bind="attrs"
              v-on="on"
            >
              {{ title }}
            </div>
          </template>
          <p style="max-width: 300px">{{ title }}</p>
        </v-tooltip>
      </div>
    </div>
    <div class="d-flex align-center pt-2">
      <v-avatar size="36">
        <v-img
          src="https://avatars.mds.yandex.net/i?id=dc7361b95e9b0527c543cbb558a72055_l-5878560-images-thumbs&n=27&h=384&w=480"
        ></v-img>
      </v-avatar>
      <div class="pl-2 text-m-subtitle-1 black--text flex-grow-1">
        <div>{{ user.name }}</div>
        <div class="text-caption">{{ user.about }}</div>
      </div>
      <div>
        <v-menu>
          <template v-slot:activator="{ on, attrs }">
            <v-btn icon @click="&quot;&quot;;" v-on="on" v-bind="attrs">
              <v-icon> mdi-dots-vertical </v-icon>
            </v-btn>
          </template>
          <v-list></v-list>
        </v-menu>
      </div>
    </div>
    <div class="d-flex align-end pt-3">
      <div class="flex-grow-1">
        <div class="text-caption">
          Этап:
          <span class="font-weight-medium">{{ step }}</span>
        </div>
        <div class="d-flex">
          <m-icon
            :color="commandFull ? 'blue' : 'red'"
            :icon="
              commandFull
                ? 'account-group-outline'
                : 'account-multiple-plus-outline'
            "
            :text="commandFull ? 'Команда собрана' : 'Команда формируется'"
          />
          <m-icon
            :color="mentor ? 'green' : 'red'"
            :icon="mentor ? 'account-tie-outline' : 'account-search-outline'"
            :text="mentor ? 'Есть наставник' : 'Нужен наставник'"
          />
          <m-icon
            color="purple"
            icon="video-outline"
            text="Есть видеоотчёты"
            v-if="video"
          />
        </div>
      </div>
      <div v-if="allNeedMoney != 0 && money != 100">
        <div class="text-body-2">
          Собрано:
          <span class="pl-1">{{ Math.ceil(money) }}%</span>
        </div>
        <v-progress-linear
          v-model="money"
          height="4"
          rounded
          stream
          :buffer-value="money"
          striped
        >
        </v-progress-linear>
        <div class="d-flex text-caption text-truncate">
          Из -
          <v-tooltip top>
            <template v-slot:activator="{ on, attrs }">
              <div class="pl-1" v-on="on" v-bind="attrs">
                {{ valueNeedMoney }}
              </div>
            </template>
            <div>{{ formatValueMoney }} &#8381;</div>
          </v-tooltip>
          &#8381;
        </div>
      </div>
      <div v-else-if="money == 100">
        <m-icon
          color="green"
          icon="checkbox-multiple-marked-circle-outline"
          text="Средства собраны"
        ></m-icon>
      </div>
    </div>
  </div>
</template>

<script>
import mIcon from "./mIcon.vue";
export default {
  props: {
    contain: {
      type: Boolean,
      default: false,
    },
    user: {
      type: Object,
    },
    imgProj: {
      type: String,
      default: "https://klike.net/uploads/posts/2021-01/1611131113_2.jpg",
    },
    type: {
      type: String,
      default: "it",
    },
    title: {
      type: String,
      default: "Название проекта",
    },
    step: {
      type: String,
      default: "Идея",
    },
    commandFull: {
      type: Boolean,
      default: false,
    },
    mentor: {
      type: Boolean,
      default: false,
    },
    video: {
      type: Boolean,
      default: false,
    },
    money: {
      type: Number,
      default: 0,
    },
    allNeedMoney: {
      type: Number,
      default: 0,
    },
  },
  components: {
    mIcon,
  },
  data: () => ({
    like: false,
    likeIcon: "mdi-heart-outline",
  }),
  computed: {
    valueNeedMoney() {
      let value = this.allNeedMoney,
        a = 0;
      if (value / 1000000000 >= 1) {
        a = value / 1000000000;
        return a.toFixed(1) + " млрд.";
      } else if (value / 1000000 >= 1) {
        a = value / 1000000;
        return a.toFixed(1) + " млн.";
      }
      a = value / 1000;
      return a.toFixed(1) + " тыс.";
    },
    formatValueMoney() {
      return (
        parseFloat(this.allNeedMoney)
          .toFixed(2)
          .replace(/(\d)(?=(\d{3})+\.)/g, "$1 ") + " "
      );
    },
  },
  methods: {
    clickLike() {
      this.like = !this.like;
      if (this.like) {
        this.likeIcon = "mdi-heart";
      } else {
        this.likeIcon = "mdi-heart-outline";
      }
    },
  },
};
</script>

<style scoped lang="scss">
.card-in-image {
  background-size: 100%;
  height: 20vh;
  & > div:first-child {
    opacity: 0;
    transition: opacity 0.5s ease;
  }

  &:hover > div:first-child {
    opacity: 1;
  }
}
</style>