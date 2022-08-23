<template>
  <v-tooltip bottom>
    <template v-slot:activator="{ on, attrs }">
      <v-icon :color="color" size="24" v-on="on" v-bind="attrs" class="pl-2"
        >mdi-{{ icon }}</v-icon
      >
    </template>
    <div style="max-height:250px">
      {{ text }}
    </div>
  </v-tooltip>
</template>


<script>
export default {
  props: ["icon", "text", "color"],
};
</script>