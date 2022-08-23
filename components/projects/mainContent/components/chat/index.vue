<template>
  <div ref="window" class="chat-page">
    <v-row no-gutters>
      <v-col cols="2" class="d-lg-block d-none"> </v-col>
      <v-col cols="12" lg="6" class="d-flex flex-column px-4">
        <my-topblock class="chat-top z-5 chat-shadow" />
        <div style="z-index: 1" ref="messages" class="flex-grow-1">
          <div class="chat-content">
            <my-messages />
          </div>
        </div>
        <div class="chat-bottom chat-shadow">
          <m-button-down :canDown="canDown" />
          <my-input-field />
        </div>
      </v-col>
      <v-col cols="4" class="d-lg-block d-none">
        <div class="chat-top">
          <v-expansion-panels multiple flat hover tile>
            <v-expansion-panel
              v-for="block in blocks"
              :key="block.title"
              class="transparent"
            >
              <v-expansion-panel-header hide-actions>
                <div
                  class="text-h6 font-weight-medium grey--text text--darken-2"
                >
                  {{ block.title }}
                </div>
              </v-expansion-panel-header>
              <v-expansion-panel-content class="pa-child-none">
                <component :is="block.comp"></component>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import myMessages from "./messages.vue";
import myInputField from "./myInputField.vue";
import myTopblock from "./topBlock.vue";
export default {
  components: {
    myMessages,
    myInputField,
    myTopblock,
    myBlockDocs: () => import("./blockDocs/blockDocs.vue"),
    myBlockImages: () => import("./blockDocs/blockImage.vue"),
    mButtonDown: () => import("./buttonDown.vue"),
  },
  data: () => ({
    blocks: [
      {
        title: "Документы",
        comp: "my-block-docs",
      },
      {
        title: "Изображения",
        comp: "my-block-images",
      },
    ],
  }),
  computed: {
    canDown() {
      return this.$store.getters["data/canDown"];
    },
  },
  methods: {
    scrollE() {
      if (
        document.body.scrollHeight - 500 >
        window.scrollY + window.innerHeight
      ) {
        this.$store.commit("data/set_canDown", true);
      } else {
        this.$store.commit("data/set_canDown", false);
      }
    },
  },
  mounted() {
    window.addEventListener("scroll", this.scrollE);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.scrollE);
  },
};
</script>

<style scoped lang="scss">
.chat-page {

  .row {
    $colorBorder: rgba(128, 128, 128, 0.301);

    .chat-top {
      position: sticky;
      box-sizing: border-box;
      border-top: 16px solid white;
      background-color: white;
      top: 0;
    }

    .chat-shadow {
      box-sizing: border-box;
      box-shadow: inset 0 0 3px $colorBorder;
    }

    .chat-content {
      box-shadow: inset 4px 0px 3px -4px $colorBorder,
        inset -4px 0px 3px -4px $colorBorder;
    }

    .chat-bottom {
      position: sticky;
      background-color: white;
      border-bottom: 16px solid white;
      bottom: 0;
      z-index: 3;
    }
  }
}
</style>

<style lang="scss">
.pa-child-none .v-expansion-panel-content__wrap {
  padding: 2px !important;
}
</style>