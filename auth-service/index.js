const express = require('express');
const axios = require('axios');

const app = express();
app.use(express.json());

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

app.listen(3001, () => {
  console.log('Auth service running on port 3001');
});

