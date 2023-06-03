const ClientAdmin = require("../models/Users/ClientAdmin.js");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

// const transporter = require("../email/emailService.js");
require("dotenv").config();

// const sendWelcomeEmail = (fullName, email) => {
//   const mailOptions = {
//     from: 'urbanbuy8@gmail.com',
//     to: email,
//     subject: '¡Bienvenido a nuestro sitio!',
//     text: `Hola ${fullName}, gracias por registrarte en nuestro sitio.`,
//   };

//   transporter.sendMail(mailOptions, (error, info) => {
//     if (error) {
//       console.error("Error al enviar el correo electrónico de bienvenida:", error);
//     } else {
//       console.log("Correo electrónico de bienvenida enviado:", info.response);
//     }
//   });
// };


const ClientAdminRegister = async (fullName, email, password) => {
  try {
    if (!email) throw new Error("Email is required");
    if (!password) throw new Error("Password is required");
    if (!fullName) throw new Error("FullName is required");
    const admin = await ClientAdmin.findOne({ email });
    if (admin) throw new Error("User already registered");
    var salt = bcrypt.genSaltSync(10);
    var hash = bcrypt.hashSync(password, salt);

    const newAdmin = new ClientAdmin({ fullName, email, password: hash });

    const savedAdmin = await newAdmin.save();

    // sendWelcomeEmail(fullName, email);

    return savedAdmin;
  } catch (error) {
    throw new Error(error.message);
  }
};

const ClientAdminLogin = async (email, password) => {
  try {
    if (!email) throw new Error("Email is required");
    const clientAdmin = await ClientAdmin.findOne({ email });
    if (!clientAdmin) throw new Error("User not found");
    const pass = await bcrypt.compare(password, clientAdmin.password);

    if (!pass) throw new Error("Password is incorrect");

    const token = jwt.sign({ id: clientAdmin._id }, process.env.KEY_JWT, {
      expiresIn: "1h",
    });
    console.log({ token, ...clientAdmin._doc });
    return await ClientAdmin.findOne({ email });
  } catch (error) {
    throw new Error(error.message);
  }
};

const ClientUpdate = async (clientId, fullName, email, password, logo) => {
  try {
    const client = await ClientAdmin.findById(clientId);
    if (client) {
      client.fullName = fullName;
      client.email = email;
      client.password = password;
      client.logo = logo;
    }
    const updatedClient = await client.save();
    return updatedClient;
  } catch (error) {
    throw new Error(error.message);
  }
};

const ClientDelete = async (clientId) => {
  try {
    const deletedClient = await ClientAdmin.findByIdAndDelete(clientId);
    return deletedClient;
  } catch (error) {
    throw new Error(error.message);
  }
};


const OrdersClient = async (clientId) => {
  try {
    const clientAdmin = await ClientAdmin.findOne({ _id: clientId })
      .populate("users")
      .populate({
        path: "users",
        populate: {
          path: "orders",
          model: "Order",
        },
      })
      .exec();

    if (!clientAdmin) {
      console.log("ClientAdmin no encontrado");
      return;
    }

    const orders = clientAdmin.users.reduce(
      (result, user) => result.concat(user.orders),
      []
    );

    console.log("Órdenes del ClientAdmin:", orders);
    return orders;
  } catch (error) {
    console.error(error);
    throw new Error("Error al obtener las órdenes del ClientAdmin");
  }
};

module.exports = {
  ClientAdminRegister,
  ClientAdminLogin,
  ClientUpdate,
  ClientDelete,
  OrdersClient,
};
