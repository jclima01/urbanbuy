const {
  ClientAdminLogin,
  ClientAdminRegister,
  ClientUpdate,
  ClientDelete,
  addDomain,
  getClientAdminByDomain,
 
} = require("../controllers/ClientAdminControllers.js");
const {ordersByClient} = require("../controllers/OrdersController.js");

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

module.exports = {
  loginClientAdminHandler,
  registerClientAdminHandler,
  updateClientHandler,
  deleteClientHandler,

  domainHandler,
  getClientAdminByDomainHandler,
};
