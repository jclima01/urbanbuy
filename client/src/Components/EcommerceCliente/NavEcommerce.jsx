import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import logoBlanco from '../../Img/logoBlanco.png';
import style from '../EcommerceCliente/NavEcommerce.module.css';
import Avatar from '../Avatares/AvatarUser';
import Modal from 'react-modal';
import { logOutUser, getClientAdminByDomain } from '../../redux/actions';


function NavEcommerce({clientAdmin}) {
  const [searchValue, setSearchValue] = useState('');
  const products = useSelector((state) => state.products);
  const categories = useSelector((state) => state.categories);
  const user = useSelector((state)=> state.user)
  
  const dispatch = useDispatch();
  const [selectedCategory, setSelectedCategory] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [mostrarModal, setMostrarModal] = useState(false);
  const navigate = useNavigate();
 

  
  

  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleCategoryChange = (event) => {
    const selectedCategory = event.target.value;
    setSelectedCategory(selectedCategory);
    const queryString = selectedCategory
      ? `?category=${encodeURIComponent(selectedCategory)}`
      : '';
    navigate(`/ecommerceuser${queryString}`);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      const queryString = selectedCategory
        ? `?search=${encodeURIComponent(searchValue)}&category=${encodeURIComponent(
            selectedCategory
          )}`
        : `?search=${encodeURIComponent(searchValue)}`;
      navigate(`/ecommerceuser${queryString}`);
    }
  };

  const openModal = () => {
    setMostrarModal(true);
  };

  const closeModal = () => {
    setMostrarModal(false);
  };

  const handleLogout = (e) => {
    e.preventDefault()
    dispatch(logOutUser());
   console.log(logOutUser)
    navigate(`/${clientAdmin.domain}`); // Redirige al inicio de la aplicación
  };
console.log(user)
  return (
    <div className={style.container}>
      <img src={logoBlanco} alt='' className={style.logoClient} />
      {Object.entries(user).length !== 0 ? (
        <div>
          <h4 className={style.hola}>Hola <strong>{user.fullName} !</strong></h4>
          <div className={style.avatar} onClick={openModal}>
            <Avatar />
          </div>
          <Modal isOpen={mostrarModal} onRequestClose={closeModal} className={style.modal}>
            <h6> Bienvenid@ a tu area de usuario <strong>{user.fullName}</strong> </h6>
            <button onClick={closeModal} className={style.closeButton}>
              Cerrar
            </button>
            <button onClick={handleLogout}>Logout</button>
          </Modal>
        </div>
      ) : (
        <div className={style.SingnIn}>
          <Link to='/signInClient'>
            <button className={style.button1}>SignIn</button>
          </Link>
          <Link to='/loginClient'>
            <button className={style.button2}>Login</button>
          </Link>
        </div>
      )}
      <div className={style.input}>
        <input
          type='text'
          value={searchValue}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
          className={style.inputSearch}
          placeholder='  Buscar producto'
        />
        <select
          className={`${style.categorias} ${style.select}`}
          value={selectedCategory}
          onChange={handleCategoryChange}
        >
          <option value=''>Categorías ▼</option>
          {categories.map((category) => (
            <option key={category._id} value={category.categoryName}>
              {category.categoryName}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default NavEcommerce;
