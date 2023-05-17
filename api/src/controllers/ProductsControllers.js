const Product = require("../models/Product");
const mongoose = require('mongoose');


//GETS

//All products
const getAllProducts = async () => {
    const dataBaseProducts = await Product.find({});
    return dataBaseProducts.map(product => product.toJSON());
};

//By Name
const getProductName = async (name) => {
    const dataBaseProducts = await Product.find({ productName: name });
    return dataBaseProducts.map(product => product.toJSON());
};

//By Id
const getProductById = async (id) => {
    const dataBaseProducts = await Product.findById(id);
    return dataBaseProducts.toJSON();
};




//POST

const createNewProduct = async (productName, description, categories, stocks, imageUrl, price, rating, clientAdmin) => {
    const newProduct = await new Product({ productName, description, categories, stocks, imageUrl, price, rating, clientAdmin })
    return newProduct;
};


//PUT

const updateProduct = {

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
