<template>
  <div
    class="plans-container pa-4 p-relative"
    @mouseleave="mUp"
    @mouseup="mUp"
    :class="{ 'user-select-all-none': down }"
  >
    <plan-card
      v-for="(plan, n) in plans"
      @click="mDown"
      :key="plan.title"
      v-bind="plan"
      :n="n"
      id="plan"
    />
    <plan-card v-bind="addPlan" />
  </div>
</template>

<script>
import planCard from "./planCard.vue";
export default {
  components: {
    planCard,
  },
  data: () => ({
    plans: [
      {
        color: "#a80707",
        title: "Первый план",
        text: "Начинаются великие дела",
        icon: "mdi-star",
      },
      {
        color: "#ffc933",
        title: "Второй план",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, ut deleniti illum ullam fugit eos, sed, ad obcaecati iusto sequi illo assumenda porro sapiente rerum numquam minima quod totam. Et.",
        icon: "mdi-star",
        left: true,
      },
      {
        color: "#1a298a",
        title: "Третий план",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, ut deleniti illum ullam fugit eos, sed, ad obcaecati iusto sequi illo assumenda porro sapiente rerum numquam minima quod totam. Et.",
        icon: "mdi-star",
        left: false,
      },
      {
        color: "#32a852",
        title: "Четвёртый план",
        text: "Начинаются великие дела",
        icon: "mdi-star",
        left: true,
      },
      {
        color: "#8132a8",
        title: "Интересный план",
        text: "Начинаются великие дела",
        icon: "mdi-star",
      },
      {
        color: "#328fa8",
        title: "Весёлый план",
        text: "Начинаются великие дела",
        icon: "mdi-star",
        left: true,
      },
      {
        color: "#8132a8",
        title: "Нужно ещё планов",
        text: "Начинаются великие дела",
        icon: "mdi-star",
      },
      {
        color: "#328fa8",
        title: "Последний план",
        text: "Начинаются великие дела",
        icon: "mdi-star",
        left: true,
      },
    ],
    addPlan: {
      color: "red",
      title: "",
      text: "",
      icon: "mdi-plus",
    },
    down: false,
    y: 0,
    target: null,
    sdvig: 0,
    startPosition: 0,
    endPosition: 0,
    offsetY: 0,
    blocksTransform: [],
    scrollOffset: 0,
    wStart: 0,
  }),
  computed: {
    upperBlock() {
      if (this.endPosition == 0) {
        return {
          clientHeight: 1000,
        };
      }
      let pos = this.endPosition - this.startPosition <= 0 ? -1 : 0;
      return document.querySelectorAll("#plan")[this.endPosition + pos];
    },
    lowerBlock() {
      if (this.endPosition == this.plans.length - 1) {
        return {
          clientHeight: 1000,
        };
      }
      let pos = this.endPosition - this.startPosition >= 0 ? 1 : 0;
      return document.querySelectorAll("#plan")[this.endPosition + pos];
    },
  },
  methods: {
    mDown(e) {
      this.down = true;
      this.offsetY = 0;
      this.y = e.y;
      this.wStart = window.scrollY;
      this.startPosition = this.endPosition = e.n;
      this.target = e.target;
      this.target.classList.remove("plan-mouse-up");
      this.target.classList.add("events-all-none");
      this.target.style.zIndex = "999";
      window.addEventListener("mousemove", this.mMove);
    },
    mMove(e) {
      this.sdvig = e.y - this.y;
      this.moveBlock();
    },
    moveBlock() {
      this.target.style.transform = `translateY(${
        this.sdvig + this.scrollOffset
      }px)`;
      let sd = this.sdvig - this.offsetY + this.scrollOffset;
      if (sd > this.target.clientHeight || sd < -this.upperBlock.clientHeight) {
        if (sd > 0 && this.lowerBlock.classList.contains("plan-card")) {
          this.switchBlock(this.lowerBlock, 1);
          return;
        } else if (sd < 0 && this.upperBlock.classList.contains("plan-card")) {
          this.switchBlock(this.upperBlock, -1);
          return;
        }
        this.mUp();
      }
    },
    switchBlock(block, way) {
      block.classList.add("plan-mouse-up");
      if (block.style.transform == "") {
        block.style.transform = `translateY(${
          -way * this.target.clientHeight
        }px)`;
        this.blocksTransform.push(block);
      } else {
        block.style.transform = "";
        this.blocksTransform.pop();
      }
      this.offsetY += way * block.clientHeight;
      this.endPosition += way;
    },
    mUp() {
      if (this.down) {
        if (this.offsetY != 0) {
          this.plans.splice(
            this.endPosition,
            0,
            this.plans.splice(this.startPosition, 1)[0]
          );
          this.blocksTransform.forEach((block) => {
            block.classList.remove("plan-mouse-up");
            block.style.transform = "";
          });
          this.target.style.transform = `translateY(${
            this.sdvig - this.offsetY + this.scrollOffset
          }px)`;
        }
        setTimeout(() => {
          this.target.classList.add("plan-mouse-up");
          this.target.classList.remove("events-all-none");
          this.target.style.zIndex = "";
          this.target.style.transform = "";
        }, 100);
        this.scrollOffset = 0;
        this.down = false;
        window.removeEventListener("mousemove", this.mMove);
        return;
      }
    },
    scrollE() {
      if (this.down) {
        this.scrollOffset = window.scrollY - this.wStart;
        this.moveBlock();
      }
    },
  },
  mounted() {
    window.addEventListener("scroll", this.scrollE);
  },
};
</script>

<style lang="scss">
.plan-mouse-up {
  transition: transform 0.5s ease;
}
.events-all-none {
  pointer-events: none;
  will-change: transform;

  & * {
    pointer-events: none;
  }
}
.user-select-all-none {
  user-select: none;

  & * {
    user-select: none;
  }

  .add-icon {
    opacity: 0 !important;
  }

  .plan-card-space {
    opacity: 0 !important;
  }
}
</style>

<style lang="scss" scoped>
.plans-container {
  overflow: hidden;

  &::before {
    position: absolute;
    content: "";
    width: 2px;
    height: 98%;
    top: 1%;
    background-color: grey;
    border-radius: 2px;
  }
}
@media (min-width: 960px) {
  .plans-container::before {
    left: calc(50% - 1px);
  }
}
@media (max-width: 960px) {
  .plans-container::before {
    left: calc(2.5vh + 16px);
  }
}
</style>