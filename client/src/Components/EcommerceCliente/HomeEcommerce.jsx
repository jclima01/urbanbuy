import { useEffect, useState } from "react";
import NavEcommerce from "./NavEcommerce";
import SliderEcommerceClient from "../EcommerceCliente/SliderEcommerceClient";
import style from "./HomeEcommerce.module.css";
import Card from "../Card/Card";
import BANNER from "../../Img/BANNER.png";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllProducts,
  getCategories,
  getClientAdminByDomain,
} from "../../redux/actions";
import SearchBar from "../../SearchBar/SearchBar";

import { useParams } from "react-router-dom";

import Modal from "react-modal";
import pagos from "../../Img/pagos.png";
import envios from "../../Img/envios.png";
import { Route, Routes } from "react-router-dom";
import EcommerceUser from "./EcommerceUser";
import Banner from "./Banner";
import TextoPrev from "./TextoPrev";
import FooterEcommerce from "./FooterEcommerce";

function HomeEcommerce() {
  const { domain } = useParams();
  const clientAdmin = useSelector((state) => state.clientAdmin);
  const products = useSelector((state) => state.products);
  const categories = useSelector((state) => state.categories);
  const theme = useSelector((state) => state.theme);
  const dispatch = useDispatch();
  const clientAdminId = clientAdmin._id;
  const [filteredProduct, setFilteredProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState([]);
  const [orderedProduct, setOrderedProduct] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(false);
  

  useEffect(() => {
    dispatch(getClientAdminByDomain(domain));
    if (clientAdmin) {
      dispatch(getAllProducts(clientAdminId));
      dispatch(getCategories(clientAdminId));
    }
  }, [dispatch, clientAdminId]);

  useEffect(() => {
    setFilteredProducts(products);
    setSearchTerm(products);
  }, [products]);

  const rating = Array.from(new Set(products.map((p) => p.rating)));

  // Filter
  const filterProduct = (e) => {
    if (e.target.value === "") {
      setFilteredProducts(products);
    } else {
      const filterRating = e.target.value;
      const filterResult = products.filter((p) => p.rating == filterRating);
      setFilteredProducts(filterResult);
      paginate(1);
    }
  };

  // Search
  const handleSearch = (searchTerm) => {
    setSearchTerm(searchTerm);
    if (searchTerm.length > 0) {
      const searchResult = filteredProduct.filter((p) =>
        p.productName.toLowerCase().includes(searchTerm)
      );
      setFilteredProducts(searchResult);
    } else {
      setFilteredProducts(products);
    }
  };

  // Order
  const handleOrder = (order) => {
    let orderResult = [];
    if (order === "priceAs") {
      orderResult = [...filteredProduct].sort((a, b) =>
        a.price > b.price ? 1 : -1
      );
    } else if (order === "priceDs") {
      orderResult = [...filteredProduct].sort((a, b) =>
        a.price > b.price ? -1 : 1
      );
    } else if (order === "nameAs") {
      orderResult = [...filteredProduct].sort((a, b) =>
        a.productName.localeCompare(b.productName)
      );
    } else if (order === "nameDs") {
      orderResult = [...filteredProduct].sort((a, b) =>
        b.productName.localeCompare(a.productName)
      );
    }
    setFilteredProducts(orderResult);
    paginate(1);
  };

  // Paginado
  const [productsPerPage] = useState(5); // Number of products to display per page
  const [currentPage, setCurrentPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpenS, setIsModalOpenS] = useState(false);
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProduct.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };
  const openModalS = () => {
    setIsModalOpenS(true);
  };
  const closeModalS = () => {
    setIsModalOpenS(false);
  };
  const containerClass = isDarkMode
    ? `${style.fondo} ${style.darkMode}`
    : style.fondo;

  return (
    <div className={style.homeEcommerceContainer}>
      <div className={containerClass}>
        <NavEcommerce clientAdmin={clientAdmin} />
        {/* <div className={style.switchContainer}>
          <label className={style.switch}>
            <input
              type="checkbox"
              checked={isDarkMode}
              onChange={() => setIsDarkMode(!isDarkMode)}
            />
            <span className={style.slider}></span>
          </label>
        </div> */}

        <Routes>
          <Route
            exact
            path={`${clientAdmin.domain}/s`}
            element={<EcommerceUser />}
          />
        </Routes>

        <div>
          <Banner/>
        </div>
        <TextoPrev/>

        <div className={style.card}>
          <Card products={currentProducts} maxRating={rating} />
        </div>

        <div className={style.faq}>
          <img src={pagos} alt="" className={style.iconopagos} />
          <h6 className={style.pagos} onClick={openModal}>
            Metodos de pago
          </h6>
          <img src={envios} alt="" className={style.iconoenvios} />
          <h6 className={style.envios} onClick={openModalS}>
            Compra segura
          </h6>
        </div>

        <Modal isOpen={isModalOpen} onRequestClose={closeModal}>
          <h2>Información sobre métodos de pago</h2>
          <br />
          <p className={style.texto1}>
            ¡Bienvenido a nuestro ecommerce! Estamos emocionados de ofrecerte
            una experiencia de compra segura y confiable. Entendemos la
            importancia de proteger tus datos y garantizar que tus transacciones
            sean seguras al momento de realizar tus pagos con tarjeta de
            crédito. Permíteme explicarte cómo garantizamos la seguridad en
            nuestros métodos de pago.
            <br />
            <br />
            En primer lugar, debes saber que utilizamos tecnología de
            encriptación de última generación. Esto significa que toda la
            información que compartes con nosotros, como los detalles de tu
            tarjeta de crédito, se codifica y se transmite de manera segura a
            través de Internet. De esta manera, cualquier dato que ingreses en
            nuestro sitio web estará protegido contra accesos no autorizados.
            <br />
            <br />
            Además, contamos con la certificación PCI DSS (Estándar de Seguridad
            de Datos de la Industria de Tarjetas de Pago). Esta certificación es
            un estándar reconocido internacionalmente para proteger la
            información confidencial de tarjetas de crédito y débito. Cumplimos
            con los requisitos más estrictos para garantizar que tu información
            personal esté segura y protegida.
            <br />
            <br />
            Para realizar tus pagos, trabajamos con proveedores de servicios de
            pago confiables. Estos proveedores están especializados en procesar
            transacciones seguras en línea y cumplen con los más altos
            estándares de seguridad. Al elegir estas pasarelas de pago, nos
            aseguramos de que tus datos estén en buenas manos y de que tu
            experiencia de compra sea lo más segura posible.
            <br />
            <br />
            Recuerda que siempre estamos monitoreando y actualizando nuestras
            medidas de seguridad para estar al tanto de las últimas amenazas y
            proteger tus datos de manera eficaz. Si en algún momento tienes
            alguna inquietud o pregunta sobre la seguridad de tus pagos, nuestro
            equipo de atención al cliente está aquí para ayudarte. Puedes
            contactarnos a través de correo electrónico o por teléfono, y
            estaremos encantados de brindarte toda la información adicional que
            necesites.
            <br />
            <br />
            En resumen, en nuestro ecommerce priorizamos la seguridad de tus
            pagos con tarjeta de crédito. Utilizamos tecnología de encriptación,
            contamos con la certificación PCI DSS, trabajamos con proveedores de
            servicios de pago confiables y contamos con un certificado SSL. Tu
            confianza y satisfacción son fundamentales para nosotros, por lo que
            nos esforzamos por ofrecerte una experiencia de compra segura y sin
            preocupaciones.
            <br />
            <br />
            ¡Gracias por elegirnos y disfruta de tus compras en nuestro
            ecommerce!
          </p>
          <button onClick={closeModal} className={style.cerrar1}>
            Cerrar
          </button>
        </Modal>

        <Modal isOpen={isModalOpenS} onRequestClose={closeModalS}>
          <h2>Información sobre compra segura</h2>
          <p>
          ¡Compra con confianza en nuestro ecommerce!
<br/>
<br/>
En nuestro ecommerce, la seguridad de tus compras es nuestra máxima prioridad. Sabemos lo importante que es para ti sentirte protegido y confiado al realizar tus transacciones en línea, y es por eso que hemos implementado las más avanzadas medidas de seguridad para garantizar una compra segura en cada paso del proceso.
<br/>
<br/>
Nuestro sistema de encriptación de datos protege toda tu información personal y financiera, asegurando que tus datos sean confidenciales y no sean accesibles para terceros. Además, trabajamos en estrecha colaboración con proveedores de pago confiables y reconocidos, lo que significa que tus transacciones se realizan a través de plataformas seguras y de confianza.
<br/>
<br/>
También hemos implementado medidas adicionales para protegerte contra posibles fraudes en línea. Nuestro equipo de expertos en seguridad mantiene una vigilancia constante sobre todas las actividades en nuestro ecommerce, detectando cualquier comportamiento sospechoso y tomando las acciones necesarias para protegerte.
<br/>
<br/>
Además de garantizar la seguridad de tus compras, nos esforzamos por ofrecerte una experiencia de compra excepcional. Navegar por nuestro sitio web es fácil y sencillo, y nuestro proceso de pago es rápido y conveniente. Si tienes alguna pregunta o inquietud durante tu compra, nuestro equipo de atención al cliente estará encantado de ayudarte en todo momento.
<br/>
<br/>
En resumen, en nuestro ecommerce puedes comprar con total tranquilidad, sabiendo que tu seguridad es nuestra prioridad. Nos comprometemos a brindarte una experiencia de compra segura, confiable y conveniente. ¡Explora nuestro catálogo hoy mismo y descubre la comodidad de comprar en línea sin preocupaciones!
          </p>
          <button onClick={closeModalS} className={style.cerrar1}>
            Cerrar
          </button>
        </Modal>

        {/* <div className={style.filterSearchContainer}>
        <div className={style.searchContainer}>
          <SearchBar onSearch={handleSearch} />
        </div>
        <div className={`${style.filterContainer} ${style[theme]}`}>
          <p>Filtrar por rating:</p>
          <select onChange={filterProduct}>
            <option value="" defaultSelected>
              Elegir rating
            </option>
            {rating.map((r) => {
              return (
                <option key={r} value={r}>
                  {r}
                </option>
              );
            })}
          </select>
        </div>

        <div className={`${style.buttonDiv} ${style[theme]}`} >
          <p>Ordenar por:</p>

          <button onClick={() => handleOrder("priceAs")}>Precio Ascendente</button>
          <button onClick={() => handleOrder("priceDs")}>Precio Descendente</button>
          <button onClick={() => handleOrder("nameAs")}>Nombre A - Z</button>
          <button onClick={() => handleOrder("nameDs")}>Nombre Z - A</button>
        </div>

      </div>

      <div>
        {filteredProduct.length > productsPerPage && (
          <ul className="pagination">
            {Array(Math.ceil(filteredProduct.length / productsPerPage))
              .fill()
              .map((_, index) => (
                <li
                  key={index}
                  className={`page-item ${
                    currentPage === index + 1 ? "active" : ""
                    }`}
                >
                  <button
                    onClick={() => paginate(index + 1)}
                    className="page-link"
                  >
                    {index + 1}
                  </button>
                </li>
              ))}
          </ul>
        )}
      </div> */}

        <div>
          
       <FooterEcommerce/>
        </div>
      </div>
    </div>
  );
}

export default HomeEcommerce;
