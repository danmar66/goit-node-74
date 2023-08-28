const nodemailer = require('nodemailer')
require('dotenv').config()

const { EMAIL_USER, EMAIL_PASSWORD } = process.env

async function main() {
  try {
    const email = {
      from: 'marchenkodanil97@gmail.com',
      to: 'marchenkodaniel97@gmail.com',
      subject: 'Nodemailer + Mailtrap test',
      html: '<h1>Nodemailer + Mailtrap test</h1>',
      text: 'Nodemailer + Mailtrap test',
    }

    // const transport = nodemailer.createTransport({
    //   host: 'sandbox.smtp.mailtrap.io',
    //   port: 2525,
    //   auth: {
    //     user: EMAIL_USER,
    //     pass: EMAIL_PASSWORD,
    //   },
    // })

    var transport = nodemailer.createTransport({
      host: 'sandbox.smtp.mailtrap.io',
      port: 2525,
      auth: {
        user: 'b50b2226de727d',
        pass: '48262f04d7b2d4',
      },
    })

    const response = await transport.sendMail(email)
    console.log('Response = ', response)
  } catch (error) {
    console.error('Application error: ', error)
  }
}

main()
