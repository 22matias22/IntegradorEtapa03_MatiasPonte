const express = require('express');
const mercadopago = require('mercadopago');
const router = express.Router();

// Configurar credenciales
mercadopago.configure({
    access_token: 'link.mercadopago.com.ar/pontech' 
});

// Ruta para crear la preferencia de pago
router.post('/api/pago', async (req, res) => {
    try {
        const { items } = req.body; // Los productos enviados desde el frontend

        const preference = {
            items: items.map(item => ({
                title: item.title,
                unit_price: item.price,
                quantity: item.quantity
            })),
            back_urls: {
                success: "http://localhost:3000/success",
                failure: "http://localhost:3000/failure",
                pending: "http://localhost:3000/pending"
            },
            auto_return: "approved"
        };

        const response = await mercadopago.preferences.create(preference);
        res.json({ id: response.body.id }); // Enviar ID de la preferencia al frontend
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
