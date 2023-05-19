//import controllers
const { UserRegister, UserLogin, UserUpdate, UserDelete  } = require("../controllers/UserControllers.js");


const loginUserHandler = async (req, res) => {
  try {
    const {email, password} = req.body
    const user = await UserLogin(email, password)
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const registerUserHandler = async (req, res) => {
  try {
    const { email, password } = req.body
    const newUser = await UserRegister(email, password)
    res.status(200).json(newUser);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const updateUserHandler = async (req, res) => {
  try {
    const {userId} = req.params;
    const { fullName, email, password } = req.body;
    const userUpdated = await UserUpdate(fullName, userId, email, password)
    res.status(200).json(userUpdated);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteUserHandler = async (req, res) => {
  try {
    const { userId } = req.params;
    const userDeleted = await UserDelete(userId)
    res.status(200).json(userDeleted);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};



module.exports = {
  loginUserHandler,
  registerUserHandler,
  updateUserHandler,
  deleteUserHandler
};
