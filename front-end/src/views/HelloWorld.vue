<template>
  <div class="hello">
    <Header />
    <p class="vue__title">
      For a guide and recipes on how to configure / customize this project,<br />
      check out the
      <a
        href="https://cli.vuejs.org"
        target="_blank"
        rel="noopener"
        class="vue__document__link"
        >vue-cli documentation</a
      >.
    </p>
    <h1>Hello Danh Van Pham</h1>
    <router-link to="/home"
      ><button class="get__product__list">Get Product</button></router-link
    >
  </div>
</template>

<script>
import Header from "../components/Header";
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  components: {
    Header,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  font-size: 4rem;
  margin: 40px 0 0;
  transition: font-size 0.5s linear;
}
h1:hover {
  font-size: 5rem;
}

.get__product__list {
  cursor: pointer;
  border: none;
  background-color: rgb(6, 255, 6);
  outline: none;
  padding: 1.2rem 2rem;
  border-radius: 4rem;
  margin-top: 2rem;
  transition: color 1.5s linear;
  position: relative;
}

.get__product__list::before {
  position: absolute;
  content: "";
  width: 0;
  height: 2px;
  background-color: rgb(6, 255, 6);
  bottom: -24%;
  left: 0;
  transform: translateY(-24%);
  transition: 1s linear;
}

.get__product__list:hover::before {
  width: 100%;
}

.get__product__list:hover {
  background-color: rgb(0, 0, 0);
  color: white;
}

.vue__document__link {
  text-decoration: none;
  transition: color 0.5s linear;
}

.vue__document__link:hover {
  color: green;
}

.vue__title {
  font-size: 1.4rem;
}
</style>
