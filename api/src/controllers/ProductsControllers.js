const Product = require("../models/Product");
const mongoose = require('mongoose');


//GETS

//All products
const getAllProducts = async () => {
    const dataBaseProducts = await Product.find({});
    return dataBaseProducts;
};

//By Name
const getProductName = async (name) => {
    const dataBaseProducts = await Product.find({ productName: name });
    return dataBaseProducts;
};

//By Id
const getProductById = async (id) => {
    const dataBaseProducts = await Product.findById(id);
    return dataBaseProducts;
};




//POST

const createNewProduct = async (productName, description, categories, stocks, imageUrl, price, rating, clientAdmin) => {
    const newProduct = await new Product({ productName, description, categories, stocks, imageUrl, price, rating, clientAdmin })
    return newProduct;
};


//PUT

const updateProduct = async (productId, updateData) => {
    const product = await Product.findById(productId);
    if (product) {
        product.productName = updatedData.productName;
        product.description = updatedData.description;
        product.categories = updatedData.categories;
        product.stocks = updatedData.stocks;
        product.imageUrl = updatedData.imageUrl;
        product.price = updatedData.price;
        product.rating = updatedData.rating;
        product.clientAdmin = updatedData.clientAdmin;
    }
    const updatedProduct = await product.save();
    return updatedProduct;

};


//DELETE

const deleteProduct = {

};

module.exports = {
    getAllProducts,
    getProductName,
    getProductById,
    createNewProduct,
    updateProduct,
    deleteProduct
}
