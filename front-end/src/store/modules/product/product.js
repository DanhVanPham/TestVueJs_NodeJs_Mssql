import ProductService from '../../../services/ProductService.js'
import { SET_PRODUCTS, DELETE_PRODUCT, UPDATE_PRODUCT, ADD_PRODUCT } from '../product/mutation-type';

const state = {
    products: [],
    product: {},
};

const getters = {
    products(state) {
        return state.products;
    }
};

const mutations = {
    [SET_PRODUCTS]: (state, products) => {
        state.products = products;
    },
    [DELETE_PRODUCT]: (state, productId) => {
        var products = [...state.products];
        var index = products.findIndex(product => product.id === productId);
        if (index !== -1) {
            products[index].status = false;
        }
    },
    [UPDATE_PRODUCT]: (state, product) => {
        var products = [...state.products];
        var index = products.findIndex(pro => pro.id === product.id);
        if (index !== -1) {
            products[index].task = product.task;
            products[index].status = product.status;
            products[index].createdAt = product.createdAt;
        }
    },
    [ADD_PRODUCT]: (state, product) => {
        var products = [...state.products];
        console.log(product);
        console.log(products);
    }
};

const actions = {
    async getProducts({ commit }) {
        try {
            const response = await ProductService.getProducts();
            if (response.status === 200) {
                await commit(SET_PRODUCTS, response.data);
                return response.status;
            }
        } catch (error) {
            await commit(SET_PRODUCTS, []);
            return 404;
        }


    },
    async deleteProduct({ commit }, product) {
        try {
            const response = await ProductService.deleteProductByProductId(product.id);
            if (response.status === 200) {
                await commit(DELETE_PRODUCT, product.id);
                return response.status;
            }
        } catch (error) {
            // await commit(SET_PRODUCTS, []);
            return 400;
        }
    },

    async updateProductExist({ commit }, product) {
        try {
            const response = await ProductService.updateProductExisted(product);
            console.log(response)
            if (response.status === 200) {
                await commit(UPDATE_PRODUCT, product);
                return response.status;
            }
        } catch (error) {
            console.log(error);
            return 400;
        }
    },

    async createProduct({ commit }, credential) {
        try {
            const response = await ProductService.createNewProduct(credential);
            console.log(response);
            if (response.status === 200) {
                await commit(ADD_PRODUCT, response.data);
                return response.status;
            }
        } catch (error) {
            return 400;
        }
    }
};

export default {
    namespaced: true, //giúp phân biệt dispatch, store nào
    name: "product",
    state,
    getters,
    mutations,
    actions,
}