const BannerText = require("../models/BannerText");
const ClientAdmin = require("../models/Users/ClientAdmin");

// GET obtenemos el banner del cliente
const getBannerText = async (clientAdminId) => { //Esta función getBannerText recibe como parámetro el ID del administrador de cliente y devuelve una promesa que busca los banners de texto asociados a ese administrador de cliente en particular. Si ocurre algún error durante la búsqueda, se muestra un mensaje de error en la consola y se arroja la excepción.
  try {
    const bannerTextes = await BannerText.find({ clientAdmin: clientAdminId });
    return bannerTextes;
  } catch (error) {
    console.error("Error al obtener el Banner:", error);
    throw error;
  }
};

//Crear Banner

const createNewBannerText = async (clientAdminId, bannerText) => { //recibe el ID del administrador de cliente y el texto del banner como parámetros. Crea un nuevo objeto de banner de texto utilizando el modelo BannerText y lo guarda en la base de datos. Luego, busca al administrador de cliente correspondiente utilizando el ID proporcionado, actualiza el campo bannerText con el nuevo banner guardado y guarda los cambios en la base de datos del administrador de cliente. Finalmente, devuelve el objeto del banner de texto guardado.
  const newBannerText = new BannerText({
    bannerText,
    clientAdmin: clientAdminId,
  });

  const saveBannerText = await newBannerText.save();

  const clientAdmin = await ClientAdmin.findById(clientAdminId);
  clientAdmin.bannerText = saveBannerText;
  await clientAdmin.save();
  return saveBannerText;
};

//Modificacion del Banner

const setBannerText = async (bannerText, bannerId) => { //findByIdAndUpdate para buscar y actualizar el banner de texto correspondiente en la base de datos. Si no se encuentra el banner de texto, se arroja una excepción indicando que no se encontró el texto del banner. Por último, devuelve el objeto actualizado del banner de texto.
  const setbannerText = await BannerText.findByIdAndUpdate(
    bannerId,
    { bannerText },
    { new: true }
  );

  if (!setbannerText) {
    throw new Error("Texto del Banner no encontrado");
  }

  return setbannerText;
};

module.exports = {
  setBannerText,
  getBannerText,
  createNewBannerText,
};
