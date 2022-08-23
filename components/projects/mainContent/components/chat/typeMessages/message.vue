<template>
  <div
    class="chat-type-message d-flex mb-2 c-pointer pa-1"
    :class="{ 'message-active rounded-lg': active }"
  >
    <div class="text-center">
      <img :src="path" alt="" class="chat-img rounded-circle" />
      <p class="text-m-caption">{{ message.date }}</p>
    </div>
    <div class="ml-4 flex-grow-1">
      <p class="text-m-subtitle-2 mainFirstColor--text font-weight-medium">
        {{ message.fio.split(" ")[1] }}
      </p>

      <p class="text-m-subtitle-2 mt-1">
        {{ message.text }}
      </p>
    </div>
    <div class="chat-action ml-4 d-flex flex-column">
      <v-icon @click.stop>mdi-close</v-icon>
      <v-icon @click.stop="imp = !imp" :color="imp ? '#FFDF00' : ''">
        {{ imp ? "mdi-star" : "mdi-star-outline" }}
      </v-icon>
    </div>
  </div>
</template>


<script>
export default {
  props: ["message", "active"],
  data: () => ({
    imp: false,
  }),
  computed: {
    path() {
      return this.message.idUser == 1
        ? "images/mobile/me/stayBorder.jpg"
        : "images/1.gif";
    },
  },
};
</script>

<style lang="scss" scoped>
.chat-type-message {
  .chat-action {
    button {
      transition: opacity 0.5s ease;
      opacity: 0;
    }
  }
  &:hover {
    .chat-action {
      button {
        opacity: 1;
      }
    }
  }
}
.message-active {
  background-color: rgba(102, 102, 102, 0.062);
  box-shadow: inset 0 0 2px rgba(128, 128, 128, 0.281);

  .chat-action {
    button {
      opacity: 1;
    }
  }
}
.chat-img {
  width: 5vmin;
  height: 5vmin;
  object-fit: cover;
}
</style>