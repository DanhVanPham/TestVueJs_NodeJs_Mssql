<template>
  <div class="main__container">
    <Header />
    <ListProduct class="product__container" :productList="products" />
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import ListProduct from "../views/ListProduct";
import { mapActions, mapGetters } from "vuex";
export default {
  name: "MainPage",
  components: {
    Header,
    ListProduct,
  },
  data: () => ({}),
  computed: {
    ...mapGetters("product", ["products"]),
  },
  methods: {
    ...mapActions("product", ["getProducts"]),
  },
  created() {
    this.getProducts();
  },
};
</script>

<style >
.main__container {
  overflow: hidden;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  position: relative;
}
</style>