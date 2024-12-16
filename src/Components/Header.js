import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../Assets/logoP.png'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import Carrito from '../Pages/Carrito'; 

const Header = ({ carrito, setCarrito }) => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <header>
      <nav>
        <div className="logo">
          <img src={logo} alt="PonteTech Logo" />
        </div>
        <ul className="nav no-search">
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/alta">Alta</Link></li>
          <li><Link to="/contacto">Contacto</Link></li>
          <li><Link to="/sobreNosotros">Sobre Nosotros</Link></li>
          <li><Link to="/admin">Admin</Link></li>
          <div className="carrito">
            <button onClick={toggleModal}>
              <FontAwesomeIcon icon={faShoppingCart} />
              <span>({carrito.length})</span> {/* Mostrar número de productos en el carrito */}
            </button>
          </div>
        </ul>
      </nav>
      <Carrito isOpen={isModalOpen} toggleModal={toggleModal} carrito={carrito} setCarrito={setCarrito} />
    </header>
  );
};

export default Header;
