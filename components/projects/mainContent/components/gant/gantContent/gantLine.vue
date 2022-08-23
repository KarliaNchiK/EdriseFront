<template>
  <div class="d-flex" :class="{ 'edit-tasks': edit }">
    <div class="gant-line-avatar pa-2">
      <img :src="user.avatar" alt="" class="rounded-circle elevation-4" />
    </div>
    <div class="gant-line-content p-relative">
      <div v-for="y in level" :key="'_y' + y" class="pt-1">
        <div class="d-flex justify-space-between">
          <div
            v-for="x in days"
            :key="'y_' + y + '_x' + x"
            class="flex-grow-1 ceil-task ceil-hover"
            :x="x"
            :y="y"
          ></div>
        </div>
      </div>
      <div class="d-flex justify-space-between ceils-add pb-1">
        <div
          v-for="x in days"
          :key="'_x_half' + x"
          class="flex-grow-1 ceil-task-add ceil-hover"
          :x="x"
          :y="level + 1"
        ></div>
      </div>
      <div class="p-absolute full-size user-tasks-container">
        <user-task
          v-for="(task, i) in tasks"
          :key="'task_' + i"
          :task="task"
          :widthCeil="widthCeil"
          :currentDay="currentDay"
          :days="days"
          @mousedown.left.native="mDown($event, i)"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { format } from "date-fns";
export default {
  props: ["user", "tasks", "person", "currentUser"],
  components: {
    userTask: () => import("./userTask/userTask.vue"),
  },
  data: () => ({
    down: false,
    x: 0,
    y: 0,
    target: null,
    task_index: 0,
    positionStartX: 0,
  }),
  computed: {
    days() {
      return this.$store.getters["projects/gant/days"];
    },
    edit() {
      return this.$store.getters["projects/gant/edit"];
    },
    currentDay() {
      return format(new Date(), "D", { useAdditionalDayOfYearTokens: true });
    },
    widthCeil() {
      return 100 / this.days;
    },
    currentTask() {
      return this.tasks[this.task_index];
    },
    level() {
      let max = this.tasks[0].y;
      for (let t = 1; t < this.tasks.length; t++) {
        if (max < this.tasks[t].y) {
          max = this.tasks[t].y;
        }
      }
      return max;
    },
  },
  methods: {
    mDown(e, task_index) {
      if (!this.edit) {
        this.$emit("activeTask", task_index);
        return;
      }
      this.task_index = task_index;
      this.target = e.target;
      let width = this.target.getAttribute("width"),
        offsetX = Math.floor(
          (e.x - this.target.getBoundingClientRect().left) /
            (this.target.clientWidth / width)
        );
      this.positionStartX = +this.target.getAttribute("x") + offsetX;
      this.x = e.x;
      this.y = e.y;
      this.down = true;
      window.addEventListener("mousemove", this.mMove);
    },
    mMove(e) {
      this.target.style.transform = `translate(${e.x - this.x}px, ${
        e.y - this.y
      }px)`;
    },
    mUp(e) {
      if (this.down) {
        window.removeEventListener("mousemove", this.mMove);
        this.target.style.transform = "";
        if (e.target.getAttribute("y") != null) {
          let offsetX = e.target.getAttribute("x") - this.positionStartX - 1,
            offsetY = e.target.getAttribute("y") - this.currentTask.y;
          if (offsetX != 0 || offsetY != 0 || this.person != this.currentUser) {
            this.$emit(
              "changeTaskPosition",
              this.task_index,
              offsetX,
              offsetY,
              this.currentUser
            );
          }
        }
        this.target.style.transition = "transform 0.5s, z-index 0.1s 0.5s ease";
        this.target = null;
        this.down = false;
      }
    },
  },
  mounted() {
    window.addEventListener("mouseup", this.mUp);
  },
};
</script>


<style lang="scss" scoped>
$height: 5vmax;
.gant-line-avatar {
  width: 10%;

  img {
    box-sizing: border-box;
    height: $height;
    width: 100%;
    object-fit: cover;
  }
}

.edit-tasks {
  * {
    user-select: none;
  }

  .user-task {
    cursor: move !important;
  }
}
.gant-line-content {
  width: 90%;
  box-sizing: border-box;
  border: 1px solid rgba(128, 128, 128, 0.25);

  .user-tasks-container {
    top: 0;
    left: 0;
    pointer-events: none;
  }

  .ceils-add {
    border-top: 1px solid rgba(128, 128, 128, 0.25);
    padding: 4px 0 0 0;
    margin: 4px 0 0 0;
  }

  .ceil-task {
    margin: 0 4px;
    height: calc(5vmax - 4px);

    &-add {
      margin: 0 4px;
      height: ($height / 3);
    }
  }

  .ceil-hover {
    transition: box-shadow 0.3s ease;
    cursor: pointer;

    &:hover {
      box-shadow: inset 0 0 4px rgb(6, 219, 226), 0 0 2px rgb(8, 134, 207);
    }
  }
}
</style>