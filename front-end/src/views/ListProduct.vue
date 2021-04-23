<template>
  <div>
    <div class="modal" v-if="this.myModel">
      <div class="modal__container">
        <div class="modal__title">Notification Delete!</div>
        <div class="modal__body">
          <p class="modal__body__notification">
            Do you want delete this product selected!
          </p>
          <button class="modal__body__close" @click="closeModel">Close</button>
          <button class="modal__body__approve" @click="approveModel">
            Approve
          </button>
        </div>
      </div>
    </div>
    <div class="modal" v-if="this.myModelUpdate">
      <div class="modal__container">
        <div class="modal__title">Notification Update!</div>
        <div class="modal__body">
          <!-- <p class="modal__body__notification">
            Require input all field before update!
          </p> -->
          <div class="form__update">
            <div class="field__task">
              <span class="task__input__tittle">Task Name:</span>
              <input
                type="text"
                placeholder="Input task name:"
                v-model="task"
              />
            </div>
            <div class="field__status">
              <span class="task__status">Status: </span>
              <input type="checkbox" id="checkbox" v-model="status" />
            </div>
          </div>
          <button class="modal__body__close" @click="closeModelUpdate">
            Close
          </button>
          <button class="modal__body__approve" @click="approveModelUpdate">
            Approve
          </button>
        </div>
      </div>
    </div>

    <table class="table__product__list">
      <tr class="table__row">
        <th class="table__heading">Number:</th>
        <th class="table__heading">Task Name:</th>
        <th class="table__heading">Status:</th>
        <th class="table__heading">Created At:</th>
        <th class="table__heading">Action:</th>
      </tr>
      <tr
        class="table__row"
        v-for="(product, index) in productList"
        :key="product.id"
      >
        <td class="table__row-value">{{ ++index }}</td>
        <td class="table__row-value">{{ product.task }}</td>
        <td
          class="table__row-value"
          :style="`color: ${checkColor(product.status)}`"
        >
          {{ checkStatus(product.status) }}
        </td>
        <td class="table__row-value">
          {{ formatDate(product.createdAt) }}
        </td>
        <td class="table__row-value">
          <button class="update__product" @click="openModalUpdate(product)">
            Update</button
          ><button
            class="delete__product"
            @click="openModal(product)"
            v-if="product.status"
          >
            Delete
          </button>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import moment from "moment";
import Vue from "vue";
import { mapActions } from "vuex";
export default {
  name: "List-Product",
  props: {
    productList: Array,
  },
  data: () => ({
    myModel: false,
    myModelUpdate: false,
    productSelected: null,
    task: "",
    status: false,
  }),
  created() {},
  methods: {
    formatDate(value) {
      return moment(value).format("MM/DD/YYYY hh:mm:ss");
    },
    checkColor(value) {
      if (value) {
        return "green";
      }
      return "red";
    },
    checkStatus(value) {
      if (value) {
        return "Active";
      }
      return "Delete";
    },
    openModal(product) {
      this.productSelected = product;
      this.myModel = true;
      this.myModelUpdate = false;
    },
    closeModel() {
      this.myModel = false;
    },
    async approveModel() {
      if (this.productSelected) {
        var checkStatus = await this.deleteProduct(this.productSelected);
        if (checkStatus === 200) {
          Vue.toasted.show("Delete product selected successful.").goAway(1500);
        } else {
          Vue.toasted.show("Delete product selected failed!").goAway(1500);
        }
        this.productSelected = "";
        this.myModel = false;
      } else {
        Vue.toasted.show("Required select product before delete!").goAway(1200);
      }
    },
    openModalUpdate(product) {
      this.productSelected = product;
      this.myModelUpdate = true;
      this.myModel = false;
      this.task = product.task;
      this.status = product.status;
    },
    closeModelUpdate() {
      this.myModelUpdate = false;
    },
    async approveModelUpdate() {
      if (this.productSelected) {
        if (this.task) {
          var productUpdate = {
            id: this.productSelected.id,
            task: this.task,
            status: this.status,
            createdAt: Date.now(),
          };
          var checkStatus = await this.updateProductExist(productUpdate);
          if (checkStatus === 200) {
            Vue.toasted
              .show("Update product selected successful.")
              .goAway(1500);
          } else {
            Vue.toasted.show("Update product selected failed!").goAway(1500);
          }
          this.productSelected = "";
          this.myModelUpdate = false;
        } else {
          Vue.toasted.show("Required input field task!").goAway(1200);
        }
      } else {
        Vue.toasted.show("Required select product before delete!").goAway(1200);
      }
    },
    ...mapActions("product", ["deleteProduct", "updateProductExist"]),
  },
};
</script>

<style scoped>
.table__product__list {
  border: none;
  margin: 0 auto;
  border-collapse: collapse;
}

.table__heading,
.table__row-value {
  border: 1px solid #ddd;
  padding: 16px;
}

.table__row:nth-child(even) {
  background-color: #f2f2f2;
}

/* .table__row:hover {
  background-color: #ddd;
} */

.table__heading {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #4caf50;
  color: white;
}
/* .table__row-value {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
} */
.update__product,
.delete__product {
  padding: 0.6rem;
  border-radius: 4rem;
  border: none;
  background-color: transparent;
  margin-right: 4px;
  cursor: pointer;
  transition: background-color 0.5s linear;
}

.update__product:hover,
.delete__product:hover {
  background-color: greenyellow;
  color: white;
}
.modal {
  background-color: white;
  max-width: 70%;
  height: 10rem;
  display: inline-block;
  position: absolute;
  top: 80%;
  left: 50%;
  transform: translate(-50%, -80%);
  padding: 1rem 1rem;
  border-radius: 0.4rem;
}
.modal__container {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
  justify-items: center;
}
.modal__title {
  margin: -1rem -1rem;
  padding: 1rem 1rem;
  background-color: blue;
  color: white;
  border-top-left-radius: 0.4rem;
  border-top-right-radius: 0.4rem;
  margin-bottom: 1.2rem;
}
.form__update {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  margin: 1rem 1rem;
}
.field__task {
  display: flex;
  justify-content: space-between;
}

.task__input__tittle {
  margin-right: 2rem;
}
.field__status {
  display: flex;
}
.task__status {
  width: 42%;
}
.modal__body__close,
.modal__body__approve {
  padding: 0.3rem 0.5rem;
  border-radius: 4rem;
  border: none;
  background-color: transparent;
  margin-right: 4px;
  cursor: pointer;
  transition: background-color 0.5s linear;
}
.modal__body__close {
  background-color: red;
  color: white;
}
.modal__body__approve {
  background-color: green;
  color: white;
  margin-left: 10px;
}
</style>