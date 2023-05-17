const Category = require('../models/Cagetory');

//GET
const getAllCategory = async (categoryName) => {
try {
    const category = await Category.findById(categoryId);
    if (category) {
      console.log('Nombre de la categoría:', category.categoryName);
      return category.categoryName;
    } else {
      console.log('Categoría no encontrada');
      return null;
    }
} catch (error) {
    console.log('no anda getAllCategory', error)
}
};

// const ClientAdmin = require("./models/ClientAdmin");

// ClientAdmin.findById(clientAdminId)
//   .populate("catalogue")  // Carga los productos relacionados
//   .exec((err, clientAdmin) => {
//     if (err) {
//       console.error(err);
//       // Manejo del error
//     } else {
//       console.log(clientAdmin.catalogue);  // Array de productos relacionados
//       // Hacer algo con los productos relacionados
//     }
//   });

const getCategoryName = () => {


};


//POST

const createNewCategory = () => {


};


//PUT

const setCategory = () => {

};


//DELETE

const deleteCategory = () => {


};