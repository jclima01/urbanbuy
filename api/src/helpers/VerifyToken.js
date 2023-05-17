const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.verifyToken = (req, res, next) => {
  const tokenunit = req.headers.authorization;

  if (tokenunit) {
    const token = tokenunit.split(" ")[1];

    jwt.verify(token, process.env.KEY_JWT, (err, user) => {
      if (err) {
        return res.status(401).json({ message: "Token is not valid" });
      }

      req.user = user;
      next();
    });
  } else {
    res.status(401).json({ message: "you are not authenticated" });
  }
};
