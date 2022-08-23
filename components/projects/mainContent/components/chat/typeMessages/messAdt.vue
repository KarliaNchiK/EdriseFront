<template>
  <div class="d-flex align-center pa-4 chat-type-adt mb-4">
    <img :src="path" alt="" class="chat-img rounded-circle" />
    <div class="ml-2">
      <p class="text-m-subtitle-1">
        {{ message.text }}
      </p>
      <p class="text-m-subtitle-2">
        {{ message.date }}
      </p>
    </div>
    <div></div>
  </div>
</template>


<script>
export default {
  props: ["message"],
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
.chat-type-adt {
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.15);
  border-radius: 24px;
  // background-color: rgba(255, 182, 123, 0.055);
}
.chat-img {
  width: 5vmin;
  height: 5vmin;
  object-fit: cover;
}
</style>