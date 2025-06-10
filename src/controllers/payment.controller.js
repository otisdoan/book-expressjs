const payos = require('../configs/payos');

const createPayment = async (req, res) => {
  const paymentData = {
    orderCode: Date.now(),
    amount: 2000,
    description: "Thanh toán đơn hàng",
    returnUrl: "http://localhost:3000/success",
    cancelUrl: "http://localhost:3000/cancel"
  };
  try {
    const paymentLink = await payos.createPaymentLink(paymentData);
    res.json({ qrCode: paymentLink.qrCode, checkoutUrl: paymentLink.checkoutUrl });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

const webhook = (req, res) => {
  const webhookData = req.body;
  const isValid = payos.verifyPaymentWebhookData(webhookData);
  if (isValid && webhookData.code === '00') {
    console.log('Payment successful:', webhookData.orderCode);
  }
  res.status(200).send('OK');
}

module.exports = {
  createPayment,
  webhook
}