<template>
  <div class="pt-4 d-flex flex-wrap full-width p-absolute">
    <v-col
      cols="12"
      md="6"
      lg="4"
      xl="3"
      v-for="(project, n) in projects"
      :key="project.user.name + '_' + n"
      class="pt-0"
    >
      <cardProj v-bind="project" :contain="false" />
    </v-col>
  </div>
</template>

<script>
import cardProj from "./cardProject.vue";
export default {
  components: {
    cardProj,
  },
  data: () => ({
    projects: [
      {
        user: {
          name: "Джеймс Макэвой",
          about: "Только вперед",
        },
        imgProj:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ3FvI6ziKyqoQSGZPha2H7XPgfIL6BrWYXQsohoSkagFur8QrL6OcKl5A7qCZEh2b1kk&usqp=CAU",
        type: "Сельскоехозяйство",
        title: "Новый тип трактора",
        step: "Разработка",
        commandFull: true,
        mentor: true,
        video: true,
        money: 25,
        allNeedMoney: 1000000,
      },
      {
        user: {
          name: "Илон Марс",
          about: "Только вверх",
        },
        imgProj:
          "https://bipbap.ru/wp-content/uploads/2017/08/04.-risunki-dlya-srisovki-legkie-dlya-devochek.jpg",
        type: "it",
        title: "Веб платформа",
        step: "Идея",
        commandFull: false,
        mentor: false,
        video: true,
      },
      {
        user: {
          name: "Айнур Фаттахов",
          about: "Соберем всёх",
        },
        imgProj: "https://klike.net/uploads/posts/2019-05/1556708032_1.jpg",
        type: "Нанотехнелогии",
        title: "Интернет магазин",
        step: "Нет продаж",
        commandFull: true,
        mentor: true,
        video: true,
        money: 72,
        allNeedMoney: 400000,
      },
      {
        user: {
          name: "Джеймс Макэвой",
          about: "Только вперед",
        },
        imgProj:
          "https://img.wattpad.com/6d4f8fff250b742fe4369778452e40fdbf1d8a5b/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f424b77556a6358614257483934413d3d2d3739353533323532382e3135636538313834336564666238323139383732333933333139312e6a7067?s=fit&w=720&h=720",
        type: "Сельскоехозяйство",
        title: "Флуоресцентные цветы ",
        step: "Разработка",
        commandFull: true,
        mentor: true,
        video: false,
      },
      {
        user: {
          name: "Джеймс Макэвой",
          about: "Только вперед",
        },
        imgProj:
          "https://i.pinimg.com/736x/de/c2/19/dec2193bc1ca7031ce1ce0b8699d4432.jpg",
        type: "Сельскоехозяйство",
        title: "Пересадка сечатки",
        step: "Расширение",
        commandFull: true,
        mentor: false,
        video: false,
        money: 17,
        allNeedMoney: 562300,
      },
      {
        user: {
          name: "Джеймс Макэвой",
          about: "Только вперед",
        },
        imgProj:
          "https://club.dns-shop.ru/api/v1/image/getOriginal/q93_abb16978b5eaaf8e7431dd7b879847224caa1156fdb23013ab647084802ea475.jpg/",
        type: "Сельскоехозяйство",
        title: "Нейростеть определяющая угрозу",
        step: "Разработка",
        commandFull: false,
        mentor: true,
        video: false,
        money: 95,
        allNeedMoney: 100000000,
      },
      {
        user: {
          name: "Джеймс Макэвой",
          about: "Только вперед",
        },
        imgProj:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhStBkzQwq0FRvjXeGZbf9FGhRD5ps_uJ5PQ&usqp=CAU",
        type: "Сельскоехозяйство",
        title: "Увеличение кпд двигателей",
        step: "Разработка",
        commandFull: true,
        mentor: true,
        video: true,
        money: 100,
        allNeedMoney: 1000000,
      },
      {
        user: {
          name: "Джеймс Макэвой",
          about: "Только вперед",
        },
        imgProj:
          "https://avatanplus.com/files/effects/mid/5ecd7af4031a917252a8492d.jpg",
        type: "Сельскоехозяйство",
        title: "Робот художник",
        step: "Разработка",
        commandFull: true,
        mentor: true,
        video: true,
        money: 55,
        allNeedMoney: 3570000000,
      },
    ],
  }),
};
</script>