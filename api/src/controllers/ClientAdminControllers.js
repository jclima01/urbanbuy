const ClientAdmin = require("../models/Users/ClientAdmin.js");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

// const transporter = require("../email/emailService.js");
require("dotenv").config();


const sendWelcomeEmail = (fullName, email) => {
  const mailOptions = {
    from: "urbanbuy8@gmail.com",
    to: email,
    subject: "¡Bienvenido a UrbanBuy!",
    html: '<html>\
        <head>\
          <style>\
            /* Estilos CSS para el correo electrónico */\
            body {\
              font-family: Arial, sans-serif;\
              background-color: #f4f4f4;\
              color: #333;\
            }\
            \
            h1 {\
              color: #ff0000;\
            }\
            .highlight {\
              font-weight: bold;\
            }\
          </style>\
        </head>\
        <body>\
          <h1>Bienvenido a UrbanBuy. Hola ' + fullName + ',</h1>\
          <p>Gracias por registrarte en nuestro sitio.</p>\
          <p>UrbanBuy es un sitio web de comercio electrónico diseñado para facilitar la creación y gestión de tu propia tienda en línea.</p>\
          <p>Con UrbanBuy, tienes acceso a una amplia gama de características y opciones que te permiten personalizar y administrar tu tienda de manera sencilla y eficiente.</p>\
          <p>Aquí hay algunas características destacadas de UrbanBuy:</p>\
          <ul>\
            <li>Edición de estilos: Puedes personalizar el aspecto y la apariencia de tu página web utilizando opciones de edición de estilos. Cambia los colores, las fuentes, los diseños y más para reflejar la identidad de tu marca.</li>\
            <li>Gestión de productos: UrbanBuy te permite cargar y administrar fácilmente tus productos. Puedes agregar descripciones, imágenes, categorías y precios para presentar tus productos de manera atractiva.</li>\
            <li>Pasarelas de pago incorporadas: Facilitamos la incorporación de pasarelas de pago para que tus clientes puedan realizar compras de forma segura y conveniente. Aceptamos múltiples métodos de pago, como tarjetas de crédito y más.</li>\
            <li>Carrito de compras: UrbanBuy proporciona un carrito de compras intuitivo y fácil de usar. Tus clientes pueden agregar productos, ver el resumen de su compra y finalizar el proceso de pago de manera rápida y sencilla.</li>\
            <li>Administración de pedidos: Mantén un seguimiento de tus pedidos con la funcionalidad de administración de pedidos de UrbanBuy. Puedes ver y gestionar el estado de los pedidos, realizar seguimiento de envíos y comunicarte con los clientes.</li>\
          </ul>\
          <p>Estas son solo algunas de las muchas características que ofrece UrbanBuy. Te invitamos a explorar nuestro sitio y descubrir cómo podemos ayudarte a establecer y hacer crecer tu negocio en línea.</p>\
          <p>No esperes más, ¡únete a UrbanBuy y comienza a vender tus productos hoy mismo!</p>\
          <p>¡Gracias por elegir UrbanBuy!</p>\
          <p><span class="highlight">El equipo de UrbanBuy</span></p>\
        </body>\
      </html>'
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(
        "Error al enviar el correo electrónico de bienvenida:",
        error
      );
    } else {
      console.log("Correo electrónico de bienvenida enviado:", info.response);
    }
  });
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

module.exports = {
  ClientAdminRegister,
  ClientAdminLogin,
  ClientUpdate,
  ClientDelete,
};
