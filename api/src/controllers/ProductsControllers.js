const Product = require("../models/Product");
const mongoose = require('mongoose');


//GETS

//All products
const getAllProducts = {

    
};

const getProductName = {

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
