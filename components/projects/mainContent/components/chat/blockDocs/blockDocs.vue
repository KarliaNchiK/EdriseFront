<template>
  <v-card class="overflow-auto scroll-custom" height="30vh" ref="blockDoc">
    <v-text-field
      hide-details
      placeholder="Название документа"
      dense
      v-model="text"
    >
      <template v-slot:append>
        <div class="pr-1">
          <v-btn icon small @click.stop="text = ''">
            <v-icon> mdi-close </v-icon>
          </v-btn>
        </div>
      </template>
      <template v-slot:prepend-inner>
        <div class="pl-1">
          <v-icon> mdi-magnify </v-icon>
        </div>
      </template>
    </v-text-field>
    <div v-for="(arrDoc, n) in docs" :key="n" class="px-2">
      <div
        v-for="doc in arrDoc"
        :key="doc.id"
        class="full-width text-caption pt-2 d-flex align-center c-pointer"
      >
        <div class="p-relative d-block">
          <v-img
            width="2vw"
            height="2vw"
            contain
            alt="images/altFon.jpg"
          ></v-img>
        </div>
        <div class="pl-1 mr-auto"></div>
        <v-icon> mdi-plus </v-icon>
      </div>
    </div>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    text: "",
    find: false,
    docs: [],
    activeAddDoc: [],
  }),
};
</script>