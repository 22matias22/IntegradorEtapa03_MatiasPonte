import React, { useState } from 'react';
import '../css/contacto.css';


const Contacto = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    direccion: '',
    provincia: '',
    producto: '', 
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.producto) {
      alert('Por favor, selecciona un producto.');
      return;
    }
    console.log('Formulario enviado:', formData);
  };

  const handleReset = () => {
    setFormData({
      nombre: '',
      email: '',
      direccion: '',
      provincia: '',
      producto: '', 
    });
  };

  return (
    <main>
      <section>
        <h1>Formulario de contacto</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="nombre">Nombre: </label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            placeholder="Pepe Pérez"
            value={formData.nombre}
            onChange={handleChange}
          />
          <br />
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="mail@gmail.com"
            required
            pattern="[(A-Za-z0-9),_@{5,40}]"
            value={formData.email}
            onChange={handleChange}
          />
          <br />
          <label htmlFor="direccion">Dirección: </label>
          <input
            type="text"
            id="direccion"
            name="direccion"
            placeholder="Calle Falsa 123"
            value={formData.direccion}
            onChange={handleChange}
          />
          <br />
          <label htmlFor="provincia">Provincia: </label>
          <input
            type="text"
            id="provincia"
            name="provincia"
            placeholder="Buenos Aires"
            value={formData.provincia}
            onChange={handleChange}
          />
          <br />
          <label htmlFor="producto">Producto: </label>
          <select
            id="producto"
            name="producto"
            value={formData.producto}
            onChange={handleChange}
            required
          >
            <option value="">Seleccionar producto</option> {/* Opción al comienzo */}
            <optgroup>
              <option value="iphone_15">iPhone 15</option>
              <option value="iphone_14">iPhone 14</option>
              <option value="iphone_13">iPhone 13</option>
              <option value="iphone_12">iPhone 12</option>
              <option value="iphone_se">iPhone SE</option>
              <option value="apple_watch_series_8">Apple Watch Series 8</option>
              <option value="apple_watch_series_7">Apple Watch Series 7</option>
              <option value="apple_watch_se">Apple Watch SE</option>
              <option value="airpods_pro_2nd_gen">AirPods Pro (2nd generation)</option>
              <option value="airpods_3rd_gen">AirPods (3rd generation)</option>
              <option value="airpods_2nd_gen">AirPods (2nd generation)</option>
            </optgroup>
          </select>
          <br />
          <br />
          <button type="submit">Enviar Datos</button>
          <button type="button" onClick={handleReset}>
            Borrar Datos
          </button>
        </form>
      </section>
    </main>
  );
};

export default Contacto;
