<template>
  <div class="grey--text text--darken-3 text-body-2 font-weight-medium pl-4">
    <m-switch
      help="Включить фильтр по наставнику"
      text="Наставник"
      textActive="Наставник есть"
      textFalse="Наставника нет"
    />
    <m-switch
      help="Включить фильтр по Видеоотчёту"
      text="Видеоотчёт"
      textActive="Видеоотчёт есть"
      textFalse="Видеоотчёта нет"
      class="pt-4"
    />
    <m-switch
      help="Включить фильтр по команде"
      text="Команда"
      textActive="Команда есть"
      textFalse="Команды нет"
      class="pt-4"
    />
  </div>
</template>


<script>
import mSwitch from "./mSwitch.vue";
export default {
  components: {
    mSwitch,
  },
};
</script>