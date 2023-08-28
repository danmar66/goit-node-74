const nodemailer = require('nodemailer')

const { EMAIL_USER, EMAIL_PASS } = process.env

async function sendMail({ to, subject, html }) {
  const email = {
    from: 'info@bookingclub.com',
    to,
    subject,
    html,
  }

  const transport = nodemailer.createTransport({
    host: 'sandbox.smtp.mailtrap.io',
    port: 2525,
    auth: {
      user: `${EMAIL_USER}`, // "b50b2226de727d",
      pass: `${EMAIL_PASS}`, // "48262f04d7b2d4"
    },
  })

  await transport.sendMail(email)
}

module.exports = sendMail
