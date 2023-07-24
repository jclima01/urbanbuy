const Review = require("../models/Review.js");

const postReview = async (productId, userId, text, rating) => {
  try {
    const newReview = new Review({
      text: text,
      user: userId,
      product: productId,
      rating: rating
    });

    const savedReview = await newReview.save();

    return savedReview;
  } catch (error) {
    throw new Error(error.message);
  }
};


const getProductReviews = async (productId) => {
  try {
    const reviews = await Review.find({ product: productId });
    
    return reviews;
  } catch (error) {
    throw new Error(error.message);
  }
};
module.exports = {
  postReview,
  getProductReviews
};
