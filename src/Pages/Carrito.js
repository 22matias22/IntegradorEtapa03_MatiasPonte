import React, { useEffect } from "react";
import '../css/carrito.css';

const Carrito = ({ isOpen, toggleModal, carrito, setCarrito }) => {
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
    setCarrito(prevCarrito => {
      const nuevoCarrito = prevCarrito.map((item, i) =>
        i === index ? { ...item, cantidad: item.cantidad + 1 } : item
      );
      localStorage.setItem("carrito", JSON.stringify(nuevoCarrito));
      return nuevoCarrito;
    });
  };

  const handleRestar = (index) => {
    setCarrito(prevCarrito => {
      const nuevoCarrito = prevCarrito.map((item, i) => {
        if (i === index && item.cantidad > 1) {
          return { ...item, cantidad: item.cantidad - 1 };
        }
        return item;
      });
      localStorage.setItem("carrito", JSON.stringify(nuevoCarrito));
      return nuevoCarrito;
    });
  };

  const handleEliminar = (index) => {
    setCarrito(prevCarrito => {
      const nuevoCarrito = prevCarrito.filter((_, i) => i !== index);
      localStorage.setItem("carrito", JSON.stringify(nuevoCarrito));
      return nuevoCarrito;
    });
  };

  const totalCarrito = carrito.reduce((total, producto) => {
    return total + parseFloat(producto.price) * producto.cantidad;
  }, 0);

  const handlePago = async () => {
    if (carrito.length === 0) {
      alert('El carrito está vacío.');
      return;
    }

    try {
      const response = await fetch('/api/pago', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ items: carrito }),
      });

      if (!response.ok) {
        throw new Error('Error en la solicitud al servidor');
      }

      const data = await response.json();

      if (data.id) {
        const mp = new window.MercadoPago("TU_PUBLIC_KEY", { locale: "es-AR" });
        mp.checkout({
          preference: { id: data.id },
          autoOpen: true, // Abre el checkout automáticamente
        });
      } else {
        alert('Error al generar el pago');
      }
    } catch (error) {
      console.error('Error en el proceso de pago:', error);
      alert('Hubo un problema al intentar procesar tu pago. Intenta de nuevo más tarde.');
    }
  };

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
                  <button onClick={() => handleRestar(index)} disabled={producto.cantidad === 1}>-</button>
                  <span>{producto.cantidad}</span>
                  <button onClick={() => handleSumar(index)}>+</button>
                  <button onClick={() => handleEliminar(index)}>Eliminar</button>
                </li>
              ))}
            </ul>
            <h3>Total: {totalCarrito.toFixed(2)} USD</h3>

            {/* Botón de Mercado Pago */}
            <button className="pago-btn" onClick={handlePago}>Pagar con Mercado Pago</button>
            <div id="wallet_container"></div>
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
