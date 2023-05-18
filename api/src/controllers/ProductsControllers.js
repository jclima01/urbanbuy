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
    const newProduct = new Product({ productName, description, categories, stocks, imageUrl, price, rating, clientAdmin })
    const savedProduct = await newProduct.save();
    return savedProduct;
};


//PUT

const updateProduct = async (id, updateData) => {
    const product = await Product.findById(id);
    if (product) {
        product.productName = updateData.productName;
        product.description = updateData.description;
        product.categories = updateData.categories;
        product.stocks = updateData.stocks;
        product.imageUrl = updateData.imageUrl;
        product.price = updateData.price;
        product.rating = updateData.rating;
        product.clientAdmin = updateData.clientAdmin;
    }
    const updatedProduct = await product.save();
    return updatedProduct;

};


//DELETE

const deleteProduct = async (id) => {

    const deletedProduct = await Product.findByIdAndDelete(id);
    return deletedProduct;
};

module.exports = {
    getAllProducts,
    getProductName,
    getProductById,
    createNewProduct,
    updateProduct,
    deleteProduct
}
