app.post('/pay', (req, res) => {
  const { token, amount } = req.body;
  if (!token || !amount) {
    return res.status(400).json({ error: 'Missing token or amount' });
  }
  // Mock validation
  return res.json({ status: 'success', message: `Payment of $${amount} confirmed.` });
});

