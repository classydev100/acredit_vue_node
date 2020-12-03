const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');  //import protection

//import jwt from "jsonwebtoken"
const jwt = require('jsonwebtoken');
//import bcrypt from "bcryptjs"
const bcrypt = require('bcryptjs');
//import { User } from "../user/user.model"
const User = require('../../models/User');
const {
  transporter,
  getPasswordResetURL,
  resetPasswordTemplate
} = require("../../config/mail");




// `secret` is passwordHash concatenated with user's register_date,
// so if someones gets a user token they still need a timestamp to intercept.
const usePasswordHashToMakeToken = ({
  password: passwordHash,
  _id: userId,
  register_date
}) => {
  const secret = passwordHash + "-" + register_date
  const token = jwt.sign({ userId }, secret, {
    expiresIn: 3600 // 1 hour
  })
  return token
}

/*** Calling this function with a registered user's email sends an email IRL ***/
/*** I think Nodemail has a free service specifically designed for mocking   ***/

//export const sendPasswordResetEmail = async (req, res) => {
router.post('/', (req, res) => {
  //   router.post('/pass', auth, (req, res) => {
  const { email } = req.body;

  //  const { email } = req.params;
  console.log(email);

  User.findOne({ email })

    .then(user => {
      console.log(user);

      const token = usePasswordHashToMakeToken(user)
      const url = getPasswordResetURL(user, token)
      const emailTemplate2 = resetPasswordTemplate(user, url)

      const emailTemplate = {
        from: 'no-reply@acredit.se',
        to: user.email,
        subject: "🌻 Acredit Password Reset 🌻",
        html: `
  <p>Hey ${user.name || user.email},</p>
  <p>We heard that you lost your Acredit password. Sorry about that!</p>
  <p>But don’t worry! You can use the following link to reset your password:</p>
  <a href=${url}>${url}</a>
  <p>If you don’t use this link within 1 hour, it will expire.</p>
  <p>Do something outside today! </p>
  <p>–Your friends at Acredit</p>
  `
      }

      transporter.sendMail(emailTemplate2, (err, info) => {
        if (err) {
          res.status(500).json(`Error sending email: ${err}`)
        } else {
          res.status(200).json("success  send email!")

        }



      })
    })
    .catch((err) => res.status(400).json({ "msg": "This email isn't registerd before." }))
});

/**
 * @private
 * @author Mohammed Ayman
 * @method POST
 * @route api/mail/validate/:userId/:token
 * @param { String } Email the email for the user.
 * @param { String } token the token made by the server.
 * @description Vakidate the userid and the token to open the password page.
 * @returns { object } true
 */
router.post('/validate/:userId/:token', (req, res) => {
  const { userId, token } = req.params;

  User.findOne({ _id: userId })
  .then(user => {
    const secret = user.password + "-" + user.register_date
    const payload = jwt.decode(token, secret)
    if (payload.userId === user.id) {
      bcrypt.genSalt(10, function (err, salt) {
        if (err) return;
        res.status(200).json({ "msg": "Valid token" });
      })
    }
  })
  .catch(() => {
    res.status(404).json("Invalid user")
  })

});


router.post('/newpassword/:userId/:token', (req, res) => {      //middleware to protect

  const { userId, token } = req.params
  const { password } = req.body

  User.findOne({ _id: userId })

    .then(user => {
      const secret = user.password + "-" + user.register_date
      const payload = jwt.decode(token, secret)
      if (payload.userId === user.id) {
        bcrypt.genSalt(10, function (err, salt) {
          if (err) return
          bcrypt.hash(password, salt, function (err, hash) {
            if (err) return
            User.findOneAndUpdate({ _id: userId }, { password: hash })
              .then(() => res.status(202).json("Password changed accepted"))
              .catch(err => res.status(500).json(err))
          })
        })
      }
    })

    .catch(() => {
      res.status(404).json("Invalid user")
    })

});


/**
 * @private
 * @author Mohammed Ayman
 * @method POST
 * @route api/mail/sendInvoice
 * @param { String } Email the email for the user.
 * @param { String } invoiceLink the PDF LINK.
 * @description Send an email for the user with the invoice.
 * @returns { object } true
 */
router.post('/sendInvoice', (req, res) => {
  const { attacheInvoice, invoiceLink, email } = req.body;

  let optArr = [];

  if (attacheInvoice) {
    optArr = [
      {   // use URL as an attachment
        filename: 'invoice.pdf',
        path: invoiceLink
      },
    ]
  }

  const emailTemplate = {
    from: 'no-reply@acredit.se',
    to: email,
    subject: "🌻 Acredit New Invoice 🌻",
    html: `
    <p>Your invoice from ACRID.</p>
    <p>You can Download it from link bellow:</p>
    ${ (attacheInvoice) ? ' ' : `<a href=${invoiceLink}>${invoiceLink}</a>`}
    <p>Do something outside today! </p>
    <p>–Your friends at Acredit</p>
    `,
    attachments: optArr
  }

  transporter.sendMail(emailTemplate, (err, info) => {
    if (err) {
      res.status(500).json("Error sending email")
    } else {
      res.status(200).json("success  send email!")

    }
  });
});

module.exports = router;

