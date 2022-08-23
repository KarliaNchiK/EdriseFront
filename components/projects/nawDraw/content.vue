<template>
  <div class="naw-draw-menu d-flex overflow-hidden flex-shrink-0 p-relative">
    <div class="about-me pa-md-4 pa-2 c-pointer d-flex">
      <div class="d-flex justify-space-between" @click="$router.push('/')">
        <div class="avatar-container">
          <img :src="pathAvatar" alt="" class="rounded-circle" />
        </div>
      </div>
      <div
        class="d-flex flex-column justify-space-between pl-2"
        @click="$router.push('/')"
      >
        <div>
          <p class="text-m-title-2">Фаттахов Айнур</p>
          <p class="text-m-subtitle-2">Fullstack Разработчик</p>
        </div>
        <p class="text-m-subtitle-2">22 года</p>
      </div>
    </div>
    <div
      class="
        naw-draw-content
        flex-grow-1
        scroll-custom
        py-lg-4
        font-weight-medium
        p-relative
      "
    >
      <template v-for="comp in comps">
        <div
          v-if="!!!comp.divider"
          :key="comp.title"
          class="card-component rounded-xl py-3 pl-4 c-pointer d-flex"
          :class="{ 'active-comp': activeComp == comp.comp }"
          @click="switchComp(comp.comp)"
        >
          <p class="flex-grow-1">
            <v-icon class="pr-2"> {{ comp.icon }} </v-icon> {{ comp.title }}
          </p>
          <div class="mr-2 naw-draw-info">
            <v-icon>mdi-information-outline</v-icon>
            <div
              class="
                p-absolute
                naw-draw-info-text
                pa-2
                rounded-lg
                text-center
                mt-2
              "
            >
              {{ comp.info }}
            </div>
          </div>
        </div>
        <div v-else :key="comp.label" class="pl-4 text-m-subtitle-1 card-line">
          <p class="py-4">{{ comp.label }}</p>
        </div>
      </template>
    </div>
    <div class="naw-draw-contact d-flex justify-space-between" v-if="!mobile">
      <div></div>
      <div class="vis-card p-relative" @click="dialog = true">
        <circle-text-svg classText="svg-visbut-text" :needAnim="true">
          <template v-slot:text> Связь -- Связь -- Связь -- </template>
          <template v-slot:icon>
            <v-icon class="i-b-c">mdi-phone-plus</v-icon>
          </template>
        </circle-text-svg>
      </div>
    </div>
    <v-dialog v-model="dialog" v-if="dialog" width="unset">
      <my-business-card />
    </v-dialog>
  </div>
</template>

<script>
import circleTextSvg from "~/components/mySvg/circleTextSvg.vue";
import { allProjects } from "~/plugins/const.js";
export default {
  props: {
    mobile: {
      default: false,
      type: Boolean,
    },
  },
  components: {
    circleTextSvg,
    myBusinessCard: () => import("~/components/ui/myBusinessCard.vue"),
  },
  data: () => ({
    dialog: false,
    comps: [],
    activeComp: "",
    drawer: true,
  }),
  computed: {
    pathAvatar() {
      let a = this.mobile ? "mobile" : "pc";
      return `images/${a}/me/stayBorder.jpg`;
    },
  },
  methods: {
    switchComp(comp) {
      this.activeComp = comp;
      if (this.activeComp != this.$route.query.comp) {
        this.$router.replace({
          query: {
            comp: this.activeComp,
          },
        });
      }
      if (this.mobile) {
        this.$emit("dialogFalse");
      }
    },
  },
  created() {
    this.comps = allProjects;
    this.activeComp = this.$route.query.comp;
  },
};
</script>

<style lang="scss" scoped>
$colorBorder: rgba(100, 100, 100, 0.5);
.naw-draw-menu {
  height: 100%;
  box-sizing: border-box;
  border: 1px solid $colorBorder;
  background: white;
  flex-direction: column;
  z-index: 700;

  .about-me {
    width: 100%;
    border-bottom: 1px solid $colorBorder;
    .avatar-container {
      width: 6vmax;
      height: 6vmax;
      flex-shrink: 0;

      img {
        height: 100%;
        width: 100%;
        object-fit: cover;
        object-position: 10% 30%;
      }
    }
  }

  .naw-draw-content {
    overflow-y: auto;

    .naw-draw-info {
      &:hover {
        .naw-draw-info-text {
          opacity: 1;
          transform: scale(1);
        }
      }
      &-text {
        transition: all 0.3s ease;
        transform: scale(0.7);
        pointer-events: none;
        opacity: 0;
        background-color: rgba(0, 0, 0, 0.7);
        width: 50%;
        right: 0%;
        color: white;
        z-index: 4;
      }
    }

    .card-line:not(:first-child) {
      &::before {
        content: "";
        position: absolute;
        width: calc(100% - 32px);
        height: 2px;
        background-color: $colorBorder;
        border-radius: 4px;
      }
    }

    .card-component {
      box-sizing: border-box;
      margin: 1vh;

      i {
        color: var(--v-mainSecondColor-base);
      }
    }

    .active-comp {
      background: var(--v-mainSecondColor-base);
      color: #fff;

      i {
        color: #fff !important;
      }
    }
  }

  .naw-draw-contact {
    padding: 1.2vmax 2vmax 1.2vmax 2vmax;
    border-top: 1px solid $colorBorder;
  }
  .vis-card {
    width: 5vmax;
    height: 5vmax;
    transition: transform 1s ease;

    .i-b-c {
      font-size: 1.8vmax;
    }

    &:hover {
      transform: scale(1.2);
    }
  }
}

@media (min-width: 960px) {
  .naw-draw-menu {
    border-radius: 12px;
  }
}
@media (max-width: 960px) {
}
</style>