const PassportRouter = require("express").Router();
const passport = require("passport");
const ClientAdmin = require("../models/Users/ClientAdmin");
const jwt = require("jsonwebtoken");

function isLogged(req, res, next) {
  req.user ? next() : res.sendStatus(403);
}

PassportRouter.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["email", "profile"] })
);

PassportRouter.get(
  "/auth/google/callback",
  passport.authenticate("google", {
    successRedirect: "http://localhost:5173/dashboard",
    failureRedirect: "/auth/google/failure",
  })
);

PassportRouter.get("/auth/google/failure", (req, res) => {
  res.send("Something wnet Wrong!");
});

PassportRouter.post("/auth/logout", (req, res) => {
  req.logout(); // Cerrar la sesión de Passport.js
  req.session.destroy(); // Destruir la sesión en Express

  res.send("see you again");
});

PassportRouter.get("/auth/protected", isLogged, async (req, res) => {
  try {
    const { email } = req.user;

    const clientAdmin = await ClientAdmin.findOne({ email });
    if (!clientAdmin) {
      // El usuario no existe, lo crearemos con la contraseña predeterminada
      const newUser = new ClientAdmin({
        email,
        password: "123456", // Asignamos la contraseña predeterminada
      });
      await newUser.save();
      
  
      const token = jwt.sign({ id: newUser._id }, process.env.KEY_JWT, {
        expiresIn: "1h",
      });

      return res.json({ token, ...newUser._doc });
    }

    // El usuario ya existe, generamos el token sin cambiar la contraseña
    const token = jwt.sign({ id: clientAdmin._id }, process.env.KEY_JWT, {
      expiresIn: "1h",
    });

    return res.json({ token, ...clientAdmin._doc });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = PassportRouter;
