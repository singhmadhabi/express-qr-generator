const fs = require("fs");
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    // TODO: replace `user` and `pass` values from <https://forwardemail.net>
    user: "singhmadhabi4@gmail.com",
    pass: "bdpkxmyadvczptob",
  },
});
//verify connection configuration
transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Server is ready to take our messages");
  }
});

const mailer = async (data) => {
  const { email, qrUrl } = data;
  const messageOptions = {
    from: '"Madhabi Singh " <singhmadhabi4@gmail.com>', // sender address
    to: email ?? "singhmadhabi4@gmail.com", // list of receivers
    subject: "QR Code from QR Generator", // Subject line
    html: 'Embedded image: <img src="qrfromQrGenerator"/>',
    attachments: [
      {
        filename: "image.png",
        path: qrUrl,
        cid: "qrfromQrGenerator", //same cid value as in the html img src
      },
    ],
  };

  const info = await transporter.sendMail(messageOptions);
  return info?.messageId;
};

module.exports = { mailer };
