const {
  ClientAdminLogin,
  ClientAdminRegister,
  ClientUpdate,
  ClientDelete,
  setBannerText,
  addDomain,
  getClientAdminByDomain,
  setTheme,
 
} = require("../controllers/ClientAdminControllers.js");
const {ordersByClient} = require("../controllers/OrderControllers.js");

const loginClientAdminHandler = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await ClientAdminLogin(email, password);
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const registerClientAdminHandler = async (req, res) => {
  try {
    const { fullName, email, password } = req.body;
    const newClientAdmin = await ClientAdminRegister(fullName, email, password);
    res.status(200).json(newClientAdmin);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const updateClientHandler = async (req, res) => {
  try {
    const { clientId } = req.params;
    const { fullName, email, password, logo } = req.body;
    const clientUpdated = await ClientUpdate(
      clientId,
      fullName,
      email,
      password,
      logo
    );
    res.status(200).json(clientUpdated);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteClientHandler = async (req, res) => {
  try {
    const { clientId } = req.params;
    const clientDeleted = await ClientDelete(clientId);
    res.status(200).json(clientDeleted);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
const domainHandler = async (req, res) => {
  try {
    const { clientAdminId } = req.params;
    const { domain } = req.body;

    const clientAdminWithDomain = await addDomain(domain, clientAdminId);
    res.status(200).json(clientAdminWithDomain);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
const getClientAdminByDomainHandler = async (req, res) => {
  try {
    const { domain } = req.params;

    const clientAdminWithDomain = await getClientAdminByDomain(domain);
    res.status(200).json(clientAdminWithDomain);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const putBannerTextHandler = async (req, res) => {
  try { //putBannerTextHandler es un controlador para manejar una solicitud PUT para actualizar un banner de texto existente. Extrae el bannerId de los parámetros de la solicitud y el bannerText del cuerpo de la solicitud. Llama a la función setBannerText para actualizar el texto del banner correspondiente al bannerId
    const { clientAdminId } = req.params;
    const { bannerText } = req.body;
    const editBannerText = await setBannerText(bannerText, clientAdminId);
    res.status(201).json(editBannerText);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

const getAllOrdersClient = async (req, res) => {
  try {
    const { clientId } = req.params;
    const orders = await ordersByClient(clientId)
    res.status(200).json(orders);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al obtener las órdenes del ClientAdmin" });
   // res.status(400).json({ error: error.message });

  }
};

const putThemeHandler = async (req, res) => {
  try { 
    const { clientAdminId } = req.params;
    const { theme } = req.body;
    const editTheme = await setTheme(theme, clientAdminId);
    res.status(201).json(editTheme);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

module.exports = {
  loginClientAdminHandler,
  registerClientAdminHandler,
  updateClientHandler,
  deleteClientHandler,
  putBannerTextHandler,
  getAllOrdersClient,
  domainHandler,
  getClientAdminByDomainHandler,
  putThemeHandler,
};
