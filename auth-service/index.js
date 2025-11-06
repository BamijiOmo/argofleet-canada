const express = require('express');
const axios = require('axios');
const client = require('prom-client');

const app = express();
app.use(express.json());

// Collect default system metrics (CPU, memory, event loop lag)
client.collectDefaultMetrics();

// Custom counter for /trigger-payment requests
const requestCounter = new client.Counter({
  name: 'trigger_payment_requests_total',
  help: 'Total number of /trigger-payment requests'
});

app.post('/trigger-payment', async (req, res) => {
  requestCounter.inc(); // Increment counter

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

// Expose /metrics endpoint for Prometheus
app.get('/metrics', async (req, res) => {
  res.set('Content-Type', client.register.contentType);
  res.end(await client.register.metrics());
});

app.listen(3001, () => {
  console.log('Auth service running on port 3001');
});

