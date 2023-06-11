const { Router } = require("express");
const ReviewRouter = Router();
const {
  getReviewsHandler,
  postReviewHandler,
} = require("../handlers/ReviewHandlers.js");

ReviewRouter.get("/", getReviewsHandler);
ReviewRouter.post("/", postReviewHandler);

module.exports = ReviewRouter;
