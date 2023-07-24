//import controllers
const {
  UserRegister,
  UserLogin,
  UserUpdate,
  UserDelete,
  getClientAdminUsers,
  getUserById
  
} = require("../controllers/UserControllers.js");

const loginUserHandler = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await UserLogin(email, password);
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const registerUserHandler = async (req, res) => {
  try {
    const { fullName, email, password } = req.body;
    const { clientAdminId } = req.params;
    const newUser = await UserRegister(
      fullName,
      email,
      password,
      clientAdminId
    );
    res.status(200).json(newUser);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const updateUserHandler = async (req, res) => {
  try {
    const { userId } = req.params;
    const { fullName, email, password, avatarName } = req.body;
    console.log(avatarName)
    const userUpdated = await UserUpdate(userId, fullName, email, password, avatarName);
    res.status(200).json(userUpdated);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteUserHandler = async (req, res) => {
  try {
    const { userId } = req.params;
    const userDeleted = await UserDelete(userId);
    res.status(200).json(userDeleted);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
const getClientAdminUsersHandler = async (req, res) => {
  try {
    const { clientAdminId } = req.params;
    const users = await getClientAdminUsers(clientAdminId);
    res.status(200).json(users);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
const   getUserHandler = async (req, res) => {
  try {
    const { userId } = req.params;
    const users = await getUserById(userId);
    res.status(200).json(users);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  loginUserHandler,
  registerUserHandler,
  updateUserHandler,
  deleteUserHandler,
  getClientAdminUsersHandler,
  getUserHandler

};
