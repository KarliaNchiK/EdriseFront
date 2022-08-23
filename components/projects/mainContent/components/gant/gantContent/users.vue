<template>
  <div>
    <gant-line
      v-for="(user, i) in users"
      :key="user.user.fio"
      v-bind="user"
      :currentUser="i"
      :person="mUser"
      class="mt-4"
      @mouseenter.native="mEnter(i)"
      @changeTaskPosition="changeTaskPosition"
      @activeTask="activeTask"
    />
    <v-dialog v-model="dialog" v-if="dialog" width="unset">
      <window-user-task :task="currentTask" />
    </v-dialog>
  </div>
</template>

<script>
import gantLine from "./gantLine.vue";
import { addDays, compareAsc } from "date-fns";
export default {
  components: {
    gantLine,
    windowUserTask: () => import("./userTask/windowUserTask.vue"),
  },
  data: () => ({
    mUser: 0,
    dialog: false,
    users: [
      {
        user: {
          avatar: "images/pc/me/smile.jpg",
          fio: "Фаттахов Айнур",
        },
        tasks: [
          {
            id: 1,
            dateStart: new Date(),
            days: 3,
            dateEnd: addDays(new Date(), 2),
            y: 1,
            title: "Первый таск",
            important: 1,
          },
          {
            id: 2,
            dateStart: addDays(new Date(), -1),
            days: 2,
            dateEnd: new Date(),
            y: 2,
            title: "Второй таск",
            important: 2,
          },
          {
            id: 3,
            dateStart: addDays(new Date(), 2),
            days: 6,
            dateEnd: addDays(new Date(), 7),
            y: 2,
            title: "Третий таск",
            important: 3,
          },
        ],
      },
      {
        user: {
          avatar: "images/1.gif",
          fio: "Горбунов Даниил",
        },
        tasks: [
          {
            id: 4,
            dateStart: new Date(),
            days: 3,
            dateEnd: addDays(new Date(), 2),
            y: 1,
            title: "Четвёртый таск",
            important: 1,
          },
          {
            id: 5,
            dateStart: addDays(new Date(), -1),
            days: 2,
            dateEnd: new Date(),
            y: 2,
            title: "Пятый таск",
            important: 2,
          },
          {
            id: 6,
            dateStart: addDays(new Date(), 2),
            days: 6,
            dateEnd: addDays(new Date(), 7),
            y: 2,
            title: "Шестой таск",
            important: 3,
          },
        ],
      },
    ],
    task_index: 0,
  }),
  computed: {
    copy() {
      return this.$store.getters["projects/gant/copy"];
    },
    currentTask() {
      return this.users[this.mUser].tasks[this.task_index];
    },
  },
  methods: {
    mEnter(user) {
      this.mUser = user;
    },
    activeTask(task_index) {
      this.task_index = task_index;
      this.dialog = true;
    },
    changeTaskPosition(task_index, x, y, currentUser) {
      let taskChanched = this.users[currentUser].tasks[task_index];
      let acceptChange = true,
        newY = taskChanched.y + y,
        dateStart = addDays(taskChanched.dateStart, x),
        dateEnd = addDays(taskChanched.dateEnd, x),
        leftIf,
        rightIf;

      this.users[this.mUser].tasks.every((task) => {
        if (task.y == newY && task.id != taskChanched.id) {
          leftIf =
            compareAsc(dateStart, task.dateEnd) <= 0 &&
            compareAsc(task.dateEnd, dateEnd) <= 0;
          rightIf =
            compareAsc(task.dateStart, dateEnd) <= 0 &&
            compareAsc(dateStart, task.dateStart) <= 0;

          if (leftIf || rightIf) {
            acceptChange = false;
            return false;
          }
        }
        return true;
      });
      if (acceptChange) {
        if (currentUser != this.mUser) {
          let copyTask = Object.assign({}, taskChanched);
          copyTask.dateStart = dateStart;
          copyTask.dateEnd = dateEnd;
          copyTask.y = newY;
          this.users[this.mUser].tasks.push(copyTask);

          if (!this.copy) {
            this.users[currentUser].tasks.splice(task_index, 1);
          }
          return;
        }

        taskChanched.dateStart = dateStart;
        taskChanched.dateEnd = dateEnd;
        taskChanched.y = newY;
        return;
      }
    },
  },
};
</script>
