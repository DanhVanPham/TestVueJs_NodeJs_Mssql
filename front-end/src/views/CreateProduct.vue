<template>
  <div>
    <Header />
    <div class="form__create__container">
      <h1 class="title">Form Create Task</h1>
      <form>
        <div class="field">
          <label class="label">Task Name</label>
          <div class="control">
            <input class="input" type="text" v-model="task" />
          </div>
        </div>
        <div class="field">
          <label class="label">Status</label>
          <div class="control">
            <input type="checkbox" id="checkbox" v-model="status" />
          </div>
        </div>
        <input
          class="button"
          type="submit"
          @click.prevent="createNewProduct()"
        />
      </form>
    </div>
  </div>
</template>

<script>
import Header from "../components/Header";
import Vue from "vue";
import { mapActions } from "vuex";
export default {
  name: "Create-Product",
  components: {
    Header,
  },
  data: () => ({
    task: "",
    status: false,
  }),
  methods: {
    createNewProduct() {
      if (this.task) {
        var product = {
          task: this.task,
          status: this.status,
        };
        this.createProduct(product);
        Vue.toasted.show("Create new product successful.").goAway(1500);
        this.$router.push("/home");
      } else {
        Vue.toasted.show("Required input task name field!").goAway(1500);
      }
    },
    ...mapActions("product", ["createProduct"]),
  },
};
</script>

<style scoped>
.form__create__container {
  width: 30%;
  height: 400px;
  display: block;
  margin: 0 auto;
  background-color: rgba(176, 243, 41, 0.9);
  padding-top: 1rem;
  padding-bottom: 2rem;
  border-radius: 4px;
}
.title {
  font-size: 1.8rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  margin-bottom: 2rem;
}
.label {
  font-size: 1.2rem;
}
.control {
  margin-top: 1.2rem;
  /* position: relative; */
}
/* .control:before {
  position: absolute;
  content: "";
  width: 0;
  height: 2px;
  background-color: black;
  bottom: -24%;
  transition: 1s linear;
  transform: translateY(-24%);
} */
/* .control:hover::before {
  width: 20%;
} */
.field {
  padding: 1rem 0;
}
.input {
  font-size: 1.2rem;
  padding: 0.6rem 0.2rem;
  outline: none;
  border: none;
  border-radius: 4px;
}
.input:focus {
  box-shadow: 0px 10px 24px 15px rgba(247, 3, 3, 0.6);
}
.button {
  margin-top: 2rem;
  padding: 0.8rem 1.6rem;
  border-radius: 2px;
  border: none;
  color: white;
  background-color: black;
  cursor: pointer;
  transition: background-color 0.3s linear;
}

.button:hover {
  background-color: rgb(43, 43, 253, 0.8);
}
</style>