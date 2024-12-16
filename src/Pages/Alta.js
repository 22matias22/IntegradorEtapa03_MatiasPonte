import React, { useState } from 'react';
import '../css/alta.css';

const Alta = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    precio: '',
    stock: '',
    marca: '',
    categoria: '',
    descripcionCorta: '',
    descripcionLarga: '',
    envioSinCargo: 'si',
    edadDesde: '',
    edadHasta: '',
    foto: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      foto: e.target.files[0],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Datos del formulario:', formData);
  };

  return (
    <main>
      <section id="alta-producto">
        <h1>Alta de Producto</h1>
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <div className="form-group">
            <label htmlFor="nombre">Nombre:</label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="precio">Precio:</label>
            <input
              type="number"
              id="precio"
              name="precio"
              value={formData.precio}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="stock">Stock:</label>
            <input
              type="number"
              id="stock"
              name="stock"
              value={formData.stock}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="marca">Marca:</label>
            <input
              type="text"
              id="marca"
              name="marca"
              value={formData.marca}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="categoria">Categoría:</label>
            <input
              type="text"
              id="categoria"
              name="categoria"
              value={formData.categoria}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="descripcion-corta">Descripción Corta:</label>
            <input
              type="text"
              id="descripcion-corta"
              name="descripcionCorta"
              value={formData.descripcionCorta}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="descripcion-larga">Descripción Larga:</label>
            <textarea
              id="descripcion-larga"
              name="descripcionLarga"
              rows="4"
              value={formData.descripcionLarga}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="envio-sin-cargo">Envío sin cargo:</label>
            <select
              id="envio-sin-cargo"
              name="envioSinCargo"
              value={formData.envioSinCargo}
              onChange={handleChange}
              required
            >
              <option value="si">Sí</option>
              <option value="no">No</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="edad-desde">Edad Desde:</label>
            <input
              type="number"
              id="edad-desde"
              name="edadDesde"
              value={formData.edadDesde}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="edad-hasta">Edad Hasta:</label>
            <input
              type="number"
              id="edad-hasta"
              name="edadHasta"
              value={formData.edadHasta}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="foto">Foto del Producto:</label>
            <input
              type="file"
              id="foto"
              name="foto"
              accept="image/*"
              onChange={handleFileChange}
              required
            />
          </div>
          <button type="submit">Dar de Alta</button>
        </form>
      </section>
    </main>
  );
};

export default Alta;

