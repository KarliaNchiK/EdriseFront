<template>
  <v-row no-gutters class="align-center">
    <v-col cols="2">
      <v-btn class="align-center" height="60" text plain tile :draggable="false"
        ><v-icon class="pr-1" color="grey">mdi-arrow-left</v-icon>
        <p class="d-none d-md-block grey--text text-m-subtitle-2">
          Назад
        </p></v-btn
      >
    </v-col>
    <v-col cols="9" class="d-flex align-center justify-center">
      <div>
        <div class="d-flex align-center">
          <div class="d-flex flex-column align-center">
            <div class="font-weight-medium">Горбунов Даниил</div>
            <div class="text-caption grey--text">online</div>
          </div>
          <div class="pl-3">
            <img src="images/1.gif" class="top-avatar rounded-circle" />
          </div>
        </div>
      </div>
    </v-col>
    <v-col cols="1" class="d-flex justify-end pr-3">
      <v-menu offset-y left attach>
        <template v-slot:activator="{ on, attrs }">
          <v-btn color="primary" dark v-bind="attrs" v-on="on" icon>
            <v-icon> mdi-dots-vertical </v-icon>
          </v-btn>
        </template>
        <v-list dense class="pa-0">
          <v-list-item dense>
            <v-list-item-icon class="mr-2">
              <v-icon> mdi-star-settings </v-icon>
            </v-list-item-icon>
            <v-list-item-content> Важные </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-col>
  </v-row>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.top-avatar {
  $size: 4vmin;
  width: $size;
  height: $size;
  object-fit: cover;
}
</style>