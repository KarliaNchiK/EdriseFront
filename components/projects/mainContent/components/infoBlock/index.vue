<template>
  <div class="full-size">
    <div
      class="d-flex cards-container"
      :class="{ 'card-height-up': y == i }"
      v-for="(contents, i) in content"
      :key="i"
    >
      <main-card
        v-for="(item, n) in contents"
        :key="n"
        :n="n"
        :i="i"
        :x="x"
        :y="y"
        :imgSrc="imgs[i * 3 + n]"
        :item="item"
        @activate="activate"
        @move="move"
      />
    </div>
  </div>
</template>

<script>
import mainCard from "./mainCard";
import { projectImgs } from "~/plugins/const.js";
export default {
  components: {
    mainCard,
  },
  data: () => ({
    x: null,
    y: null,
    imgs: [],
    content: [
      [
        {
          title: "Расскажем о нас",
          text: "Команда состоит из людей, которые участвовали и выступали на множестве различных мероприятий. Развиваемся во всех направлениях. Не боимся преград, ошибок, успеха. Готовы постигать новые вершины. Только вперед с опытом прошлого!",
          color: "red",
          icon: "mdi-account-check",
          btnText: "Наши соц сети",
          colorCard: "rgba(179, 229, 252, 0.7)",
        },
        {
          title: "Путь",
          text: "Мы прошли не малый путь по реализации разных проектов. Выслушивали критику отовсюду по разным направлениям. Знаем на личном опыте большое количество преград, с которыми можно столкнуться. И готовы поделиться опытом!",
          color: "purple",
          icon: "mdi-account-voice",
          btnText: "Начать путь",
          colorCard: "rgba(129, 249, 132, 0.7)",
          link: "/",
        },
        {
          title: "Наш опыт",
          text: "Решали десятки кейс задач. Побеждали и побеждаем в чемпионатах. Выступали на конференциях и слушали других. Запускали несколько проектов в различых сферах. С каждым разом становясь лучше и уверенее в своих силах!",
          color: "green",
          icon: "mdi-account-plus",
          btnText: "Хочу получить свой",
          colorCard: "rgba(255, 204, 188, 0.7)",
          link: "/Lk",
        },
      ],
      [
        {
          title: "Собранный опыт",
          text: "Для вас мы собрали свой опыт, опыт множества успешных предпринимателей, опыт ошибок неудачных стартапов и сделали выводы. Сделали путь, пройдя который, вы значительно повысите свои шансы реализовать свой проект!",
          color: "#4DD0E1",
          icon: "mdi-account-tie",
          btnText: "Начинаю изучать",
          colorCard: "rgba(248, 187, 208, 0.7)",
        },
        {
          title: "Задумка",
          text: "Наша цель в том, чтобы вы могли пройти по проверенному пути реализации проекта. Узнав обо всём с чем нужно будет встретиться, что нужно знать, к чему быть готовым, как нужно мыслить и многое многое другое. Предоставить инструменты для реализации вашего проекта! ",
          color: "#29B6F6",
          icon: "mdi-arrow-up-bold",
          btnText: "Я добьюсь всего",
          colorCard: "rgba(215, 204, 200, 0.7)",
        },
        {
          title: "Чем мы поможем",
          text: "Мы создали этапы, благодаря которым, вы от абстрактной своей идеи бизнеса, придёте к его реализации с пониманием своей предметной области. Дадим конкретный маршрут строения проекта. Передадим опыт, предоставим шаблоны документов. И будем поддерживать вас на каждом шаге!",
          color: "#00C853",
          icon: "mdi-battery",
          btnText: "Я заряжен на успех",
          colorCard: "rgba(255, 204, 128, 0.7)",
        },
      ],
      [
        {
          title: "Чем помочь нам",
          text: "Нам нужен ваш опыт, чтобы делать путь ещё лучше. Хотите поделиться своим опытом, чтобы сделать добро и этот мир чуть лучше? Это ваш шанс! Напишите нам, но без сочинений пожалуйста, коротко и понятно. Спасибо за понимание!",
          color: "#9E9D24",
          icon: "mdi-briefcase-upload",
          btnText: "Становимся лучше",
          colorCard: "rgba(176, 190, 197, 0.7)",
        },
        {
          title: "Поможем всем",
          text: "Мы создали продукт, который предназначен для всех. Нам не важно есть у вас опыт или нет. Есть желание сделать что полезное для себя и других? Тогда мы вам поможем реализовать себя, через ваш проект. Путь длинный и насыщенный, он ждт вас!",
          color: "#FFA726",
          icon: "mdi-check-circle",
          btnText: "Я готов",
          colorCard: "rgba(178, 235, 242, 0.7)",
        },
        {
          title: "Поддержка",
          text: "Мы всегда рады поддержке с вашей стороны. Если вы имеете возможность поддержать проект, просим вас сделать это. Это позволит разрабатывать новые инструменты для вас быстрее и лучше. Благодарны за каждый рубль!",
          color: "#EC407A",
          icon: "mdi-cash-multiple",
          btnText: "Рубль к рублю",
          colorCard: "rgba(178, 223, 219, 0.7)",
        },
      ],
    ],
  }),
  methods: {
    scrollToBlock() {
      this.$nextTick().then(() => {
        document.getElementsByClassName("card-active")[0].scrollIntoView({
          block: "start",
          behavior: "smooth",
        });
      });
    },
    move(way) {
      let a = this.x + way,
        b = this.y;
      if (a == 3) {
        this.x = 0;
        b++;
        if (b == 3) {
          this.y = 0;
          this.scrollToBlock();
        } else {
          this.y++;
          this.scrollToBlock();
        }
      } else if (a == -1) {
        this.x = 2;
        b--;
        if (b == -1) {
          this.y = 2;
          this.scrollToBlock();
        } else {
          this.y--;
          this.scrollToBlock();
        }
      } else {
        this.x += way;
      }
    },
    activate(payload) {
      if (payload == null) {
        this.x = this.y = this.active = null;
        return;
      }
      this.x = payload.n;
      this.y = payload.i;
    },
  },
  created() {
    this.imgs = projectImgs;
  },
};
</script>

<style lang="scss" scoped>
.cards-container {
  transition: height 0.5s ease;
}
@media (min-width: 960px) {
  .cards-container {
    height: 22vw;
  }
  .card-height-up {
    height: 30vw !important;
  }
}
@media (max-width: 960px) {
  .cards-container {
    height: 35vw;
  }
  .card-height-up {
    height: 50vw !important;
  }
}
</style>