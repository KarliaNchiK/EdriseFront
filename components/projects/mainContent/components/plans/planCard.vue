<template>
  <div
    class="plan-card p-relative d-flex justify-space-between active-hover pb-4"
    :style="`--color:${color}`"
  >
    <div
      class="plan-card-space rounded-lg elevation-4 c-pointer"
      :class="leftPos ? 'order-3' : 'order-1'"
      @mousedown.left.stop="switchleft"
    ></div>
    <div class="plan-card-icon d-flex flex-column" @mousedown.left="mDown">
      <div class="card-icon main-icon elevation-2">
        <v-icon color="white"> {{ icon }} </v-icon>
      </div>
      <div class="flex-grow-1 d-flex align-center full-width">
        <div
          class="card-icon add-icon full-width elevation-4"
          @mousedown.prevent.stop="addnew"
        >
          <v-icon> mdi-plus </v-icon>
        </div>
      </div>
    </div>
    <div
      class="plan-card-content rounded-lg elevation-2"
      :class="[
        leftPos ? 'order-1 triangle-left' : 'order-3 triangle-right',
        { 'height-null': title == '' },
      ]"
      @mousedown.left="mDown"
    >
      <div
        class="
          plan-title
          pa-4
          text-m-title-2
          white--text
          d-flex
          justify-space-between
        "
      >
        <p>{{ title }}</p>
        <v-btn
          icon
          outlined
          color="white"
          class="e-all"
          @mousedown.left.stop="deletePlan"
        >
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </div>
      <div class="plan-content pa-4 rounded-b-lg">
        <p>{{ text }}</p>
        <v-divider class="my-4"></v-divider>
        <div class="plan-action d-flex justify-space-between">
          <v-btn
            outlined
            :color="color"
            @mousedown.left.stop="action"
            class="c-pointer e-all"
            >Действие</v-btn
          >
          <v-btn
            outlined
            :color="color"
            icon
            @mousedown.left.stop="action"
            class="c-pointer e-all"
          >
            <v-icon>mdi-pencil</v-icon>
          </v-btn>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["color", "icon", "title", "text", "n", "left"],
  data: () => ({
    leftPos: false,
  }),
  methods: {
    switchleft() {
      this.leftPos = !this.leftPos;
    },
    mDown(e) {
      this.$emit("click", {
        y: e.y,
        target: e.path[1],
        n: this.n,
      });
    },
    deletePlan(e) {
      console.log("delete");
    },
    addnew(e) {
      console.log("add");
    },
    action() {
      console.log("action");
    },
  },
  created() {
    this.leftPos = !!this.left;
  },
};
</script>

<style lang="scss" scoped>
.plan-card {
  $color: var(--color);

  .height-null {
    overflow: hidden;
    min-height: 0 !important;
    height: 0 !important;
  }

  &-content {
    background-color: $color;
    position: relative;
    min-height: 10vh;
    cursor: move;

    & * {
      pointer-events: none;
    }

    .plan-content {
      background: white;
      box-sizing: border-box;

      p {
        color: var(--v-colorText-base);
      }
    }
  }

  .triangle-left {
    &::before {
      content: "";
      position: absolute;
      right: 1px;
      top: 1vh;
      border: 1.5vh solid transparent;
      border-left: 1vw solid $color;
      transform: translateX(100%);
    }
  }
  .triangle-right {
    &::before {
      content: "";
      position: absolute;
      left: 1px;
      top: 1vh;
      border: 1.5vh solid transparent;
      border-right: 1vw solid $color;
      transform: translateX(-100%);
    }
  }
  &-space {
    width: 45%;
    opacity: 0;
    background: rgba(219, 219, 219, 0.116);
  }

  &-icon {
    cursor: move;
    order: 2;
    width: 5vh;
    & * {
      pointer-events: none;
    }

    .main-icon {
      background-color: $color;
    }
    .add-icon {
      cursor: pointer;
      pointer-events: all !important;
      background: rgb(250, 250, 250);
      opacity: 0;
    }
    .card-icon {
      height: 5vh;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      i {
        font-size: 4vh;
      }
    }
  }

  &.active-hover {
    .plan-card-space {
      transition: opacity 0.5s ease;
      &:hover {
        opacity: 1;
      }
    }

    .add-icon {
      transition: opacity 0.5s ease;
    }
    &:hover {
      .add-icon {
        opacity: 1;
      }
    }
  }
}

@media (min-width: 960px) {
  .plan-card {
    &-content {
      width: 45%;
    }
    &-space {
      width: 45%;
    }
  }
}
@media (max-width: 960px) {
  .triangle-left,
  .triangle-right {
    &::before {
      display: none;
    }
  }
  .plan-card {
    &-content {
      order: 3 !important;
      width: 90%;
    }
    &-space {
      display: none;
      width: 0%;
    }
  }
}
</style>