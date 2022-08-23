<template>
  <div
    class="info-card full-size d-flex flex-column"
    :style="`--colorCard:${data.colorCard};`"
  >
    <p class="text-m-title-1 colorText--text info-card-title text-truncate">
      {{ data.title }}
    </p>

    <div
      class="full-height info-card-content overflow-hidden d-flex elevation-2"
    >
      <div class="d-flex full-height info-card-content-text p-relative">
        <img :src="imgLink" alt="" class="info-card-img full-size" />
        <div
          class="
            d-flex
            flex-column
            p-absolute
            full-size
            pa-4
            card-content-text
            back-color
          "
          :class="active ? 'op-1' : ' font-weight-medium '"
          :style="`--color:${data.colorCard}`"
        >
          <p
            class="flex-grow-1"
            :class="
              active
                ? 'text-m-title-2 black--text'
                : 'text-m-subtitle-2 white--text'
            "
          >
            {{ data.text }}
          </p>

          <div class="d-flex">
            <div
              class="rounded-xl px-4 py-2 elevation-8"
              :style="{ backgroundColor: data.color }"
              @click.stop
            >
              <p class="text-m-subtitle-2 white--text">
                <v-icon class="pr-2 white--text">{{ data.icon }}</v-icon>
                {{ data.btnText }}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="d-flex flex-column full-height info-card-content-action">
        <div class="d-flex justify-space-between">
          <v-btn
            @click.stop="$emit('move', -1)"
            dark
            :disabled="n == 0"
            :color="data.color"
            rounded
          >
            Назад</v-btn
          >
          <v-btn
            @click.stop="$emit('move', 1)"
            dark
            :disabled="n == 8"
            :color="data.color"
            >Дальше</v-btn
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["imgLink", "lazyImgLink", "data", "n", "active"],
  data: () => ({
    activeBlock: null,
  }),
};
</script>

<style scoped lang="scss">
.active-card {
  .info-card-title {
    padding: 0 0 0 16px;
    transform: translateY(150%);
  }
  .info-card-content {
    .back-color::before {
      opacity: 0 !important;
    }
    .info-card-img {
      transform: translateX(100%);
    }
    .info-card-content-text {
      width: 50% !important;

      .card-content-text {
        & > p {
          padding: 5vmin 0 0 0;
        }
      }
    }
    .info-card-content-action {
      width: 50%;
    }
  }
}
.info-card {
  &-title {
    padding: 0 0 16px 16px;
    transition: all 0.4s ease;
  }
  &-img {
    will-change: transform;
    transition: transform 0.5s ease;
    object-fit: cover;
  }
  &-content {
    border-radius: 12px;
    transition: border-radius 0.5s ease;
    & > div {
      transition: all 0.5s ease;
    }

    .info-card-content-text {
      transition: all 0.5s ease;
      width: 100%;

      .card-content-text {
        opacity: 0;
        transition: opacity 0.5s ease;

        p {
          transition: all 0.5s ease;
          z-index: 4;
        }
      }
    }

    .info-card-content-action {
      transition: all 0.5s ease;
      width: 0%;
    }
  }
  &:hover {
    .info-card-title {
      color: var(--colorCard) !important;
    }
    // .info-card-img {

    // }

    .info-card-content {
      border-radius: 24px !important;
    }

    .card-content-text,
    .back-color::before {
      opacity: 1;
    }
  }
}
.back-color::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.6) 60%
  );
  z-index: 3;
  opacity: 0;
  transition: opacity 0.5s ease;
}

@media (min-width: 960px) {
  .info-card-content-action {
    padding: 24px;
  }
}
@media (max-width: 960px) {
}
</style>