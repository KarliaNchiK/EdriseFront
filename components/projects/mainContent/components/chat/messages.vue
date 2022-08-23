<template>
  <div>
    <v-item-group multiple class="py-4" v-model="activeMess">
      <v-item
        v-for="(message, n) in messages"
        :key="message.id"
        v-slot="{ active, toggle }"
        :value="message.id"
      >
        <div @click="toggle" class="px-2">
          <component
            ref="message"
            :is="message.type"
            :active="active"
            :message="message"
            :predMess="predMess(n)"
          />
        </div>
      </v-item>
    </v-item-group>
  </div>
</template>

<script>
import { format } from "date-fns";
import { ru } from "date-fns/locale";
import { messages } from "~/plugins/const.js";
export default {
  components: {
    message: () => import("./typeMessages/message.vue"),
    adt: () => import("./typeMessages/messAdt.vue"),
  },
  data: () => ({
    countNewMess: null,
    messages: [],
    activeMess: [],
  }),

  methods: {
    predMess(n) {
      if (n == 0) {
        return;
      }
      return {
        date: this.messages[n - 1].date,
        idUser: this.messages[n - 1].idUser,
        type: this.messages[n - 1].type,
      };
    },
    chekNeedDate(message, n) {
      let day = this.formatDay(message.date);
      if (n == 0 || day != this.dayLast) {
        this.dayLast = day;
        return true;
      }
      return false;
    },
    formatDay(date) {
      return format(new Date(date), "d MMMM", { locale: ru });
    },
  },
  
  created() {
    this.messages = messages;
  },
};
</script>


<style scoped>
.textMessage {
  text-overflow: clip;
  white-space: normal;
  word-wrap: break-word;
  max-width: 100%;
}
.dots {
  padding-left: 2px;
  letter-spacing: 2px;
}
.dots span {
  animation: sdvig 0.7s linear infinite;
  animation-delay: calc(var(--duration) * 0.1s);
}

@keyframes sdvig {
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-4px);
  }
  100% {
    transform: translateY(0px);
  }
}
</style>