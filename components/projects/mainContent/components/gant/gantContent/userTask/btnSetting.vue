<template>
  <div
    class="btn-setting c-pointer"
    :class="needSubtitle ? 'pa-6' : 'subtitle-none py-4 px-2'"
  >
    <div>
      <i :class="`mdi mdi-${icon}`" :style="{color: color}"></i>
    </div>
    <div
      class="ml-4 d-flex flex-column"
      :class="`justify-${needSubtitle ? ' justify-space-between' : 'center'}`"
    >
      <p class="text-m-subtitle-1 font-weight-medium">
        {{ title }}
      </p>
      <p class="text-m-subtitle-2" v-if="needSubtitle">
        {{ subtitle }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["icon", "title", "subtitle", "needSubtitle", "color"],
};
</script>

<style lang="scss" scoped>
$borderRadius: 8px;
$colorText: rgba(0, 0, 0, 0.55);
$sizeIcon: calc(2vh + 2vw);
.btn-active {
  $colorText: rgba(255, 255, 255, 0.9) !important;
  background: var(--v-mainSecondColor-base) !important;
  box-shadow: inset 0 0 12px rgba(0, 0, 0, 0.25),
    0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%),
    0px 1px 5px 0px rgb(0 0 0 / 12%);

  p,
  i {
    color: $colorText;
  }
}
.subtitle-none {
  $sizeIcon: calc(1vh + 1vw);
  i {
    font-size: $sizeIcon;
  }
}
.btn-setting {
  transition: background-color 0.5s, box-shadow 0.5s ease;
  border-radius: $borderRadius;
  background: rgb(255, 255, 255);
  display: flex;
  overflow: hidden;
  p,
  i {
    color: $colorText;
    transition: color 0.5s ease;
  }

  i {
    display: flex;
    line-height: 1;
    font-size: $sizeIcon;
  }

  &:hover {
    background: rgb(245, 245, 245);
    box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%),
      0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);
  }
}
</style>