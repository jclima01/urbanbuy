const {
  setBannerText,
  getBannerText,
  createNewBannerText,
} = require("../controllers/BannerTextController");

const getBannerTextHandler = async (req, res) => {
  try { // controlador para manejar una solicitud GET para obtener el banner de texto. Extrae el clientAdminId de los parámetros de la solicitud, llama a la función getBannerText para obtener el banner de texto correspondiente y devuelve una respuesta JSON con el banner de texto.
    const { clientAdminId } = req.params;
    const bannerText = await getBannerText(clientAdminId);
    res.status(200).json(bannerText);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const postBannerTextHandler = async (req, res) => {
  try { // controlador para manejar una solicitud POST para crear un nuevo banner de texto. Extrae el clientAdminId de los parámetros de la solicitud y el bannerText del cuerpo de la solicitud. Llama a la función createNewBannerText para crear un nuevo banner de texto asociado al clientAdminId y devuelve una respuesta JSON con el nuevo banner de texto creado.
    const { clientAdminId } = req.params;
    const { bannerText } = req.body;
    const newBannerText = await createNewBannerText(clientAdminId, bannerText);
    res.status(201).json(newBannerText);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const putBannerTextHandler = async (req, res) => {
  try { //putBannerTextHandler es un controlador para manejar una solicitud PUT para actualizar un banner de texto existente. Extrae el bannerId de los parámetros de la solicitud y el bannerText del cuerpo de la solicitud. Llama a la función setBannerText para actualizar el texto del banner correspondiente al bannerId
    const { bannerId } = req.params;
    const { bannerText } = req.body;
    const editBannerText = await setBannerText(bannerText, bannerId);
    res.status(201).json(editBannerText);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getBannerTextHandler,
  postBannerTextHandler,
  putBannerTextHandler,
};
