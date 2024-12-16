import React, { useEffect } from "react";
import '../css/carrito.css';

const Carrito = ({ isOpen, toggleModal, carrito, setCarrito }) => {
  // Cerrar el modal con la tecla "Esc"
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === "Escape") {
        toggleModal();
      }
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [toggleModal]);

  const handleSumar = (index) => {
    const nuevoCarrito = [...carrito];
    nuevoCarrito[index].cantidad += 1;
    setCarrito(nuevoCarrito);
    localStorage.setItem("carrito", JSON.stringify(nuevoCarrito));
  };

  const handleRestar = (index) => {
    const nuevoCarrito = [...carrito];
    if (nuevoCarrito[index].cantidad > 1) {
      nuevoCarrito[index].cantidad -= 1;
      setCarrito(nuevoCarrito);
      localStorage.setItem("carrito", JSON.stringify(nuevoCarrito));
    }
  };

  const handleEliminar = (index) => {
    const nuevoCarrito = carrito.filter((_, i) => i !== index);
    setCarrito(nuevoCarrito);
    localStorage.setItem("carrito", JSON.stringify(nuevoCarrito));
  };

  // Calcular el total general sumando los subtotales de todos los productos
  const totalCarrito = carrito.reduce((total, producto) => {
    return total + parseFloat(producto.price) * producto.cantidad;
  }, 0);

  return isOpen ? (
    <div className="modal-container">
      <div className="modal-content">
        <button className="close-btn" onClick={toggleModal}>X</button>
        <h2>Tu carrito de compras</h2>

        {carrito.length > 0 ? (
          <>
            <ul>
              {carrito.map((producto, index) => (
                <li key={index}>
                  <img src={producto.imgSrc} alt={producto.title} width="50" />
                  <p>{producto.title}</p>
                  <p>Precio: {producto.price} USD</p>
                  <p>Cantidad: {producto.cantidad}</p>
                  <p>Subtotal: {(parseFloat(producto.price) * producto.cantidad).toFixed(2)} USD</p>

                  <button onClick={() => handleRestar(index)}>-</button>
                  <span>{producto.cantidad}</span>
                  <button onClick={() => handleSumar(index)}>+</button>
                  <button onClick={() => handleEliminar(index)}>Eliminar</button>
                </li>
              ))}
            </ul>
            {/* Mostrar el total general */}
            <h3>Total: {totalCarrito.toFixed(2)} USD</h3>
          </>
        ) : (
          <p>No tienes productos en el carrito.</p>
        )}
      </div>
      <div className="modal-backdrop" onClick={toggleModal}></div>
    </div>
  ) : null;
};

export default Carrito;
