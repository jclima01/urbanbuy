const cloudinary = require("cloudinary").v2;
const Product = require("../models/Product");
const ClientAdmin = require("../models/Users/ClientAdmin");
const mongoose = require("mongoose");

cloudinary.config({
  cloud_name: "dhan4gjbn",
  api_key: "982674615614551",
  api_secret: "CsN09nf69VN6R_9M9SMTwP021wU",
});

//GETS

//All products
const getAllProducts = async (clientAdminId) => {
  try {
    const products = await Product.find({ clientAdmin: clientAdminId })
      .populate("categories") // Popula las categorías
      .exec();

    // const clientAdmin = await ClientAdmin.findById(clientAdminId)
    //   // .populate("clientAdmin") // Popula el modelo ClientAdmin
    // return clientAdmin.catalogue;
    return products;
  } catch (error) {
    throw new Error(error.message);
  }
};
//By Name
const getProductName = async (name, clientAdminId) => {
  try {
    const dataBaseProducts = await Product.find({
      productName: name,
      clientAdmin: clientAdminId,
    })
      .populate("categories") // Popula las categorías
      // .populate("clientAdmin") // Popula el modelo ClientAdmin
      .exec();
    return dataBaseProducts;
  } catch (error) {
    throw new Error(error.message);
  }
};

//By Id
const getProductById = async (productId) => {
  try {
    const dataBaseProducts = await Product.findById(productId)
      .populate("categories") // Popula las categorías
      // .populate("clientAdmin") // Popula el modelo ClientAdmin
      .exec();
    return dataBaseProducts;
  } catch (error) {
    throw new Error(error.message);
  }
};

//POST
const createNewProduct = async (
  productName,
  description,
  categoriesIds,
  stocks,
  imageUrl,
  price,
  rating,
  clientAdminId
) => {
  try {
    const uploadResult = await cloudinary.uploader.upload(
      imageUrl /*,{optiones}*/
    );

    const newProduct = new Product({
      productName,
      description,
      categories: categoriesIds,
      stocks,
      imageUrl: uploadResult.secure_url,
      price,
      rating,
      clientAdmin: clientAdminId,
    });
    const savedProduct = await newProduct.save();
    const clientAdmin = await ClientAdmin.findById(clientAdminId);
    clientAdmin.catalogue.push(savedProduct._id);
    await clientAdmin.save();

    return savedProduct;
  } catch (error) {
    throw new Error(error.message);
  }
};

//PUT
const updateProduct = async (
  productId,
  productName,
  description,
  categoriesIds,
  stocks,
  imageUrl,
  price,
  rating
) => {
  try {
    const uploadResult = await cloudinary.uploader.upload(
      imageUrl /*,{optiones}*/
    );

    const product = await Product.findById(productId);
    if (product) {
      product.productName = productName;
      product.description = description;
      product.categories = categoriesIds;
      product.stocks = stocks;
      product.imageUrl = uploadResult.secure_url;
      product.price = price;
      product.rating = rating;
    }
    const updatedProduct = await product.save();
    return updatedProduct;
  } catch (error) {
    throw new Error(error.message);
  }
};

//DELETE
const deleteProduct = async (productId) => {
  console.log( productId)
  try {
    const deletedProduct = await Product.findByIdAndDelete(productId);
    return deletedProduct;
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = {
  getAllProducts,
  getProductName,
  getProductById,
  createNewProduct,
  getProductById,
  createNewProduct,
  updateProduct,
  deleteProduct,
};
