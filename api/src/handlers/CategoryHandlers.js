const {
  createNewCategory,
  getAllCategory,
  deleteCategory,
  setCategory,
} = require("../controllers/CategoryControllers");

const getCategoryHandler = async (req, res) => {
  try {
    const { clientAdminId } = req.params;
      const categories = await getAllCategory(clientAdminId);
      res.status(200).json(categories);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const postCategoryHandler = async (req, res) => {
  try {
    const { clientAdminId } = req.params;
    const { categoryName } = req.body;
    const newCategory = await createNewCategory(
      clientAdminId,
      categoryName,
    );
    res.status(201).json(newCategory);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const putCategoryHandler = async (req, res) => {
  try {
    const {categoryId} = req.params
    const { categoryName } = req.body;
      const editCategory = await setCategory(categoryName, categoryId);
      res.status(201).json(editCategory);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteCategoryHandler = async (req, res) => {
  try {
    const { categoryId } = req.params;
    if (categoryId === undefined) return null;
    if (categoryId) {
      const categoryDelete = await deleteCategory(categoryId);
      res.status(204).json(categoryDelete);
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getCategoryHandler,
  postCategoryHandler,
  putCategoryHandler,
  deleteCategoryHandler,
};
