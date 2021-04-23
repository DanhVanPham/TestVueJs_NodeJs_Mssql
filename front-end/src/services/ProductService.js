import {get, remove, post, put } from '../utils/apiCaller';

class ProductService {
    getProducts() {
        return get('/product', {}, {});
    }
    deleteProductByProductId(productId) {
        return remove(`/product/${productId}`, {}, {});
    }

    updateProductExisted(product) {
        return put(`/product/${product.id}`, {}, product, {});
    }

    createNewProduct(product) {
        return post(`/product`, {}, product, {});
    }
}

export default new ProductService();