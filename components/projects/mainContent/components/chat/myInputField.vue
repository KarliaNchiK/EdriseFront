<template>
  <div class="d-flex pa-3 full-height align-center">
    <div class="pr-2">
      <v-btn icon>
        <v-icon> mdi-paperclip </v-icon>
      </v-btn>
    </div>
    <div class="flex-grow-1">
      <v-text-field
        hide-details
        outlined
        dense
        v-model="text"
        placeholder="Начните писать..."
      >
      </v-text-field>
    </div>
    <div class="pl-2">
      <v-btn icon>
        <v-icon> mdi-send </v-icon>
      </v-btn>
    </div>
    <v-file-input v-show="false" multiple id="fileInp"></v-file-input>
  </div>
</template>

<script>
export default {
  data: () => ({
    write: false,
    text: "",
  }),
  mounted() {
    setTimeout(() => {
      window.scrollTo(0, document.body.scrollHeight);
    }, 50);
  },
};
</script>