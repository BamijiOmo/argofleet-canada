const express = require('express');
const app = express();
const port = 3001;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Payment Service is running');
});

app.post('/pay', (req, res) => {
  const { token, amount } = req.body;

  if (!token || !amount) {
    return res.status(400).json({ error: 'Missing token or amount' });
  }

  return res.json({
    status: 'success',
    message: `Payment of $${amount} confirmed for token ${token}.`
  });
});

app.listen(port, () => {
  console.log(`Payment Service listening on port ${port}`);
});

