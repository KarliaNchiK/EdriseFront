<template>
  <div class="d-flex flex-column justify-space-around">
    <div class="div-f-container p-relative d-flex">
      <div
        class="
          div-f-container-text
          d-flex
          flex-column
          justify-space-between
          colorText--text
          pr-4
        "
      >
        <div>
          <p
            class="text-m-title-1 font-weight-bold ff-poppins anim-scale-down-1"
          >
            @Edrise
          </p>
          <p class="text-m-subtitle-1 p-prof anim-scale-down-2 ff-raleway">
            Fullstack
          </p>
          <p
            class="mt-n1 text-m-subtitle-1 p-prof anim-scale-down-3 ff-raleway"
          >
            разработчик
          </p>
        </div>
        <div>
          <p class="text-m-subtitle-2 ff-raleway text-right anim-scale-down-2">
            ПОДДЕРЖИВАЮ ДИЗАЙНЕРОВ <br />
            И АГЕНТСТВА <br />
            С ТВОРЧЕСКОЙ РАЗРАБОТКОЙ
          </p>
        </div>
      </div>
      <div class="img-f-container rounded-lg"></div>
    </div>
    <div class="text-m-h4 text-right ff-raleway text-uppercase">
      <p class="anim-scale-down-2">Кто я +</p>
      <p class="anim-scale-down-3 mt-n4">Что могу?</p>
      <p class="anim-scale-down-3 mt-n4">Иду вперед</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.div-f-container {
  min-height: 60vmin;

  & > .div-f-container-text {
    width: 50%;
  }

  .p-prof {
    font-weight: 500;
    text-transform: uppercase;
  }

  .me-photo {
    width: 50%;
    object-fit: cover;
    object-position: 75% center;
  }

  & > .img-f-container {
    width: 50%;
    background-image: url("http://edrise.ru/images/mobile/pictures/sunset3.jpg");
    background-size: cover;
    background-position: 75% center;
    box-shadow: inset 0 0 12px 2px var(--v-colorBackground-base);
  }
}
</style>