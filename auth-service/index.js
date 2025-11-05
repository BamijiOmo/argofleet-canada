app.post('/trigger-payment', async (req, res) => {
  const token = req.headers.authorization?.split(' ')[1];
  const amount = req.body.amount;

  try {
    const response = await axios.post('http://payment-service/pay', {
      token,
      amount
    });
    res.json(response.data);
  } catch (err) {
    res.status(500).json({ error: 'Payment service failed', details: err.message });
  }
});

