<template>
  <v-card class="py-1" height="30vh">
    <div
      class="
        overflow-auto
        scroll-custom
        d-flex
        flex-wrap
        p-relative
        full-height
      "
      ref="blockImg"
    >
      <div
        v-for="(img, n) in imgs"
        :key="n"
        class="pa-1 d-block p-relative rounded-lg overflow-hidden c-pointer"
        style="width: 50%"
        v-ripple
      >
        <v-img width="100%" height="100%" class="elevation-2">
          <div class="d-flex justify-end full-width">
            <v-btn icon>
              <v-icon size="32" color="red darken-2"> mdi-plus </v-icon>
            </v-btn>
          </div>
        </v-img>
      </div>
    </div>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    imgs: [],
    activeAddDoc: [],
  }),
};
</script>