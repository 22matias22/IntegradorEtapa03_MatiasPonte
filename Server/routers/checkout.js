const mercadopago = require('mercadopago');

// Configurar credenciales
mercadopago.configure({
  access_token: 'APP_USR-1743559732416992-121719-8ca06de1cc3776367cf7ecc750c689e6-150971411', 
});

app.post('/api/pago', async (req, res) => {
  try {
    const items = req.body.items.map(item => ({
      title: item.title,
      quantity: item.cantidad,
      currency_id: 'USD',
      unit_price: parseFloat(item.price),
    }));

    const preference = {
      items,
      back_urls: {
        success: 'https://tu-sitio.com/success',
        failure: 'https://tu-sitio.com/failure',
        pending: 'https://tu-sitio.com/pending',
      },
      auto_return: 'approved',
    };

    const response = await mercadopago.preferences.create(preference);
    res.json({ id: response.body.id });
  } catch (error) {
    console.error('Error al crear preferencia:', error);
    res.status(500).send('Error al procesar el pago');
  }
});
