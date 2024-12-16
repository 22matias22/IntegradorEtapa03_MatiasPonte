import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import Carrito from './Pages/Carrito';
import Alta from './Pages/Alta';
import Contacto from './Pages/Contacto';
import SobreNosotros from './Pages/SobreNosotros';
import Admin from './Pages/Admin';
import './App.css';

function App() {
  const [carrito, setCarrito] = useState([]);

  // Cargar el carrito desde localStorage al inicio
  useEffect(() => {
    const carritoGuardado = JSON.parse(localStorage.getItem('carrito')) || [];
    setCarrito(carritoGuardado);
  }, []);

  // Guardar el carrito en localStorage cuando cambie
  useEffect(() => {
    localStorage.setItem('carrito', JSON.stringify(carrito));
  }, [carrito]);

  return (
    <Router>
      <div className="App">
        {/* Pasar el carrito y setCarrito al Header */}
        <Header carrito={carrito} setCarrito={setCarrito} />
        <Routes>
          {/* Pasar  el carrito y setCarrito al Home */}
          <Route path="/" element={<Home carrito={carrito} setCarrito={setCarrito} />} />
          <Route path="/alta" element={<Alta />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/sobreNosotros" element={<SobreNosotros />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/Carrito" element={<Carrito carrito={carrito} setCarrito={setCarrito} />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
