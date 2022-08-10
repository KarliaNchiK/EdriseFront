<template>
  <div
    class="
      full-size
      colorBackground
      pa-2
      p-relative
      d-flex
      flex-column
      overflow-hidden
    "
  >
    <div class="d-flex full-width border-b div-top">
      <div class="div-avatar border-r d-flex justify-center pa-1 flex-shrink-0">
        <img src="mobile/me/stayBorder.jpg" class="rounded-circle" />
      </div>
      <div class="flex-grow-1 py-2 pl-2 overflow-hidden">
        <p class="font-weight-medium text-naw-title">
          Фаттахов Айнур Джамилевич
        </p>
        <p class="colorSubtitleText--text text-naw-subtitle">Возраст 22 год</p>
        <p class="colorSubtitleText--text text-naw-subtitle">
          +7 965 609 54 93
        </p>
      </div>
    </div>
    <div class="flex-grow-1 p-realtive d-flex naw-main">
      <div
        class="naw-main-icon border-r justify-space-between py-4 flex-shrink-0"
      >
        <my-switch-theme />
        <div>
          <v-btn
            icon
            :style="`--color:${icon.borderColor}; --iconColor:${icon.color}`"
            outlined
            v-for="icon in icons"
            :key="icon.icon"
            large
            class="btn-soc-mob d-flex mt-4"
            target="_blank"
            :href="icon.link"
          >
            <v-icon>{{ icon.icon }}</v-icon>
          </v-btn>
        </div>
      </div>
      <div class="flex-grow-1 justify-center naw-main-content">
        <div>
          <div
            v-for="(text, n) in texts"
            :key="text"
            class="
              d-flex
              font-weight-medium
              c-pointer
              naw-main-content-link
              px-2
              rounded-xl
            "
            @click="$emit('dialogFalse')"
          >
            <p
              class="
                mr-2
                mainFirstColor--text
                font-weight-black
                text-naw-content
              "
            >
              0{{ n + 1 }}.
            </p>
            <p v-html="text" class="text-naw-content"></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { icons, appBarText } from "~/plugins/const.js";
import mySwitchTheme from "../../ui/mySwitchTheme.vue";
export default {
  components: {
    mySwitchTheme,
  },
  data: () => ({
    icons: [],
    texts: [],
  }),
  mounted() {
    this.icons = icons;
    this.texts = appBarText.slice();
    this.texts[1] = "Образование";
  },
};
</script>

<style lang="scss" scoped>
.div-top {
  height: 8vmax;

  .div-avatar {
    & > img {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }

  .but-close,
  .but-close i {
    $sizeBut: 7vmin;
    font-size: $sizeBut;
    width: $sizeBut;
    height: $sizeBut;
  }
}
.naw-main {
  & > div {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &-content {
    padding-bottom: 10vh;

    & > div {
      & > .naw-main-content-link {
        margin-bottom: 5vh;
        opacity: 0;
        animation: upkey 0.5s linear 1 forwards;

        &::before {
          content: "";
          position: absolute;
          width: 0;
          height: 2px;
          bottom: 0;
          left: 0;
          background: var(--v-mainSecondColor-base);
          animation: full-width 0.5s ease 1 forwards;
        }

        @for $i from 1 through 3 {
          $delay: $i * 0.5s;
          &:nth-child(#{$i}) {
            animation-delay: $delay;

            &::before {
              animation-delay: 0.5s + $delay;
            }
          }
        }
      }
    }
  }
}

.div-avatar,
.naw-main-icon {
  width: 8vmax;
}
.border {
  $color: var(--v-cBorder-base);

  &-b {
    border-bottom: 1px solid $color;
  }
  &-r {
    border-right: 1px solid $color;
  }
}

@keyframes full-width {
  from {
    width: 0%;
  }
  to {
    width: 100%;
  }
}

@keyframes upkey {
  0% {
    transform: translateY(-5vh);
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}
</style>