const QRCode = require("qrcode");

const createQR = async (url) => {
  const qrUrl = await QRCode.toDataURL(url);
  return qrUrl;
};

module.exports = { createQR };
