<template>
  <v-text-field
    hide-details
    tile
    outlined
    dense
    clearable
    :placeholder="label"
    append-icon="mdi-magnify"
    color="lightColor"
    @click:append="&quot;&quot;;"
    v-model="inputText"
  >
    <template v-slot:prepend>
      <v-tooltip bottom>
        <template v-slot:activator="{ on }">
          <v-icon v-on="on"> mdi-help-circle-outline </v-icon>
        </template>
        <div style="max-width: 150px" class="text-wrap">
          Найдите проект по его названию или названию связанного с ним тега
        </div>
      </v-tooltip>
    </template>
    <template v-slot:append-outer>
      <v-btn
        icon
        class="mb-n1 mt-n1 transition-05-all"
        @click="userSay()"
        :disabled="dis"
      >
        <v-icon :size="microActive ? 30 : 24">
          {{ microActive ? "mdi-microphone-outline" : "mdi-microphone" }}
        </v-icon>
      </v-btn>
    </template>
  </v-text-field>
</template>

<script>
export default {
  data: () => ({
    microActive: false,
    recognizer: null,
    inputText: "",
    sayText: "",
    dis: false,
    label: "Начните вводить название",
  }),
  methods: {
    userSay() {
      this.microActive = !this.microActive;
      if (this.microActive) {
        this.inputText = "";
        this.label = "Говорите";
        this.recognizer.start();
      } else {
        this.recognizer.stop();
        if (this.inputText == "") {
          this.label = "Начните вводить название";
        }
      }
    },

    SwitchValue(value) {
      this.inputText = value;
    },
    falseMicroIcon() {
      this.microActive = false;
    },
    voiceError() {
      this.dis = true;
    },
  },
  created() {
    if (process.client) {
      var Recognition =
        window.webkitSpeechRecognition || window.SpeechRecognition;

      this.recognizer = new Recognition();
      this.recognizer.interimResults = true;
      this.recognizer.lang = "ru-Ru";

      var switValue = this.SwitchValue;
      var mA = this.falseMicroIcon;
      var error = this.voiceError;

      this.recognizer.onresult = function (event) {
        var result = event.results[event.resultIndex];
        if (result[0].transcript != "") {
          switValue(result[0].transcript);
        }
      };
      this.recognizer.onsoundend = function () {};
      this.recognizer.onspeechend = function () {
        mA();
      };
      this.recognizer.onerror = function (e) {
        console.log(e);
        error();
      };
    }
  },
};
</script>