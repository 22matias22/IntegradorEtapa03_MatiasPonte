const express = require('express');
const connectDB = require('./config/database');
const productRoutes = require('./routes/productRoutes');
const cartRoutes = require('./routes/cartRoutes');
require('dotenv').config();

const app = express();

// Conectar a MongoDB
connectDB();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rutas
app.use(productRoutes);
app.use(cartRoutes);

// Puerto
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
