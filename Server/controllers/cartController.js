const Cart = require('../models/Cart');

// Agregar productos al carrito
exports.addToCart = async (req, res) => {
  try {
    const cart = new Cart(req.body);
    await cart.save();
    console.log('Carrito recibido:', req.body);
    res.status(201).json(cart);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
