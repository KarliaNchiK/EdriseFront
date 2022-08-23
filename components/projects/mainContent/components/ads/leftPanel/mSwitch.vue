<template>
  <v-switch
    hide-details
    color="green"
    inset
    class="mt-0"
    v-model="valueSw"
    @click="active = true"
  >
    <template v-slot:label>
      <div class="d-flex align-center" :class="{ 'blue--text': active }">
        {{ mentorText }}
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-fab-transition>
              <v-btn
                small
                icon
                @click.stop="
                  active = false;
                  valueSw = false;
                "
                v-if="active"
                v-on="on"
                v-bind="attrs"
                class="ml-1 red--text"
              >
                <v-icon>mdi-close-circle-outline</v-icon>
              </v-btn>
              <v-btn
                small
                icon
                @click.stop="active = true"
                v-on="on"
                v-bind="attrs"
                v-else
                class="ml-1 green--text"
              >
                <v-icon>mdi-plus-circle-outline</v-icon>
              </v-btn>
            </v-fab-transition>
          </template>
          <div>{{ help }}</div>
        </v-tooltip>
      </div>
    </template>
  </v-switch>
</template>

<script>
export default {
  props: ["help", "text", "textActive", "textFalse"],
  data: () => ({
    active: false,
    valueSw: false,
  }),
  computed: {
    mentorText() {
      if (this.active && this.valueSw) {
        return this.textActive;
      } else if (this.active) {
        return this.textFalse;
      }
      return this.text;
    },
  },
};
</script>