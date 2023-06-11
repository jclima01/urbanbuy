const { Router } = require("express");
const bannerTextRoutes = Router();

const {
  getBannerTextHandler,
  postBannerTextHandler,
  putBannerTextHandler,
} = require("../handlers/bannerTextHandler");


bannerTextRoutes.get('/dashBoard/Edit', getBannerTextHandler )
bannerTextRoutes.post('/dashBoard/Edit', postBannerTextHandler )
bannerTextRoutes.put('/dashBoard/Edit', putBannerTextHandler )

module.exports = bannerTextRoutes;