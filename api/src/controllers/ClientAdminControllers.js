const ClientAdmin = require("../models/Users/ClientAdmin.js");
const User = require("../models/Users/User.js");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { errorMonitor } = require("nodemailer/lib/xoauth2/index.js");
require("dotenv").config();
const sgMail = require("@sendgrid/mail");

// Configurar el transporte de correo
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const welcomeEmail = async (fullname, email) => {
  try {
    const msg = {
      to: email,
      from: "urbanbuy8@gmail.com", // Tu dirección de correo electrónico verificada en SendGrid
      subject: "Bienvenido a UrbanBuy",
      text: `Hola ${fullname}.

      Gracias por unirte a UrbanBuy. UrbanBuy es un sitio web de comercio electrónico diseñado para facilitar la creación y gestión de tu propia tienda en línea. Con UrbanBuy, tienes acceso a una amplia gama de características y opciones que te permiten personalizar y administrar tu tienda de manera sencilla y eficiente.
      
      Aquí hay algunas características destacadas de UrbanBuy:
      - Edición de estilos: Puedes personalizar el aspecto y la apariencia de tu página web utilizando opciones de edición de estilos. Cambia los colores, las fuentes, los diseños y más para reflejar la identidad de tu marca.
      - Gestión de productos: UrbanBuy te permite cargar y administrar fácilmente tus productos. Puedes agregar descripciones, imágenes, categorías y precios para presentar tus productos de manera atractiva.
      - Pasarelas de pago incorporadas: Facilitamos la incorporación de pasarelas de pago para que tus clientes puedan realizar compras de forma segura y conveniente. Aceptamos múltiples métodos de pago, como tarjetas de crédito y más.
      - Carrito de compras: UrbanBuy proporciona un carrito de compras intuitivo y fácil de usar. Tus clientes pueden agregar productos, ver el resumen de su compra y finalizar el proceso de pago de manera rápida y sencilla.
      - Administración de pedidos: Mantén un seguimiento de tus pedidos con la funcionalidad de administración de pedidos de UrbanBuy. Puedes ver y gestionar el estado de los pedidos, realizar seguimiento de envíos y comunicarte con los clientes.
      
      No esperes más, ¡únete a UrbanBuy y comienza a vender tus productos hoy mismo!
      
      Gracias por elegir UrbanBuy!
      Vamos al sitio web: https://urban-buy.netlify.app/`,
    };

    await sgMail.send(msg);
  } catch (error) {
    throw new Error("Error al enviar el correo electrónico de bienvenida");
  }
};
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

    welcomeEmail(fullName, email);

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
const addDomain = async (domain, clientAdminId) => {
  try {
    const clientAdmin = await ClientAdmin.findById(clientAdminId);
    clientAdmin.domain = domain;
    const savedClientAdmin = await clientAdmin.save();
    return savedClientAdmin;
  } catch (error) {
    throw new Error(error.message);
  }
};
const getClientAdminByDomain = async (domain) => {
  try {
    const clientAdmin = await ClientAdmin.findOne({ domain: domain });
    // const savedClientAdmin = await clientAdmin.save();
    return clientAdmin;
  } catch (error) {
    throw new Error(error.message);
  }
};


const setBannerText = async (bannerText, clientAdminId) => {
  //findByIdAndUpdate para buscar y actualizar el banner de texto correspondiente en la base de datos. Si no se encuentra el banner de texto, se arroja una excepción indicando que no se encontró el texto del banner. Por último, devuelve el objeto actualizado del banner de texto.
  try {
    const clientAdmin = await ClientAdmin.findById(clientAdminId);
    clientAdmin.bannerText = bannerText;
    const savedAdmin = await clientAdmin.save();
    console.log(bannerText, clientAdminId);
    return savedAdmin;
  } catch (error) {
    throw new Error(error.message);
  }
};

const setTheme = async (theme, clientAdminId) => {
  //findByIdAndUpdate para buscar y actualizar el banner de texto correspondiente en la base de datos. Si no se encuentra el banner de texto, se arroja una excepción indicando que no se encontró el texto del banner. Por último, devuelve el objeto actualizado del banner de texto.
  try {
    const clientAdmin = await ClientAdmin.findById(clientAdminId);
    clientAdmin.theme = theme;
    const savedAdmin = await clientAdmin.save();
    return savedAdmin;
  } catch (error) {
    throw new Error(error.message);
  }
};


module.exports = {
  ClientAdminRegister,
  ClientAdminLogin,
  ClientUpdate,
  ClientDelete,
  addDomain,
  getClientAdminByDomain,
  setBannerText,
  setTheme,
};
