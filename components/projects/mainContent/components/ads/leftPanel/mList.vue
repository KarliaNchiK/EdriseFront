<template>
  <v-list class="pa-0" nav>
    <template v-for="item of items">
      <v-list-item
        :key="item.title"
        @click="&quot;&quot;;"
        class="justify-start pl-4 mb-0"
      >
        <v-icon size="28" :color="item.color" class="pr-2"
          >mdi-{{ item.icon }}</v-icon
        >
        <v-list-item-content
          class="text-body-2 font-weight-medium text-truncate"
        >
          {{ item.title }}
        </v-list-item-content>
      </v-list-item>
      <v-divider :key="item.icon"></v-divider>
    </template>
  </v-list>
</template>

<script>
export default {
  props: ["items"],
};
</script>