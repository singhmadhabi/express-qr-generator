const router = require("express").Router();

const mailRouter = require("../modules/mail/mail.api");
const qrRouter = require("../modules/qr/qr.api")

router.use("/mail", mailRouter);
router.use("/qr", qrRouter);

module.exports = router;