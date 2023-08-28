const sendgrid = require('@sendgrid/mail')
require('dotenv').config()

const { SENDGRID_API_KEY } = process.env

async function main() {
  try {
    sendgrid.setApiKey(SENDGRID_API_KEY)

    const email = {
      from: 'marchenkodanil97@gmail.com',
      to: 'marchenkodaniel97@gmail.com',
      subject: 'Sendgrid test',
      html: '<h1>Hello from Sendgrid</h1>',
      text: 'Hello from Sendgrid',
    }

    const response = await sendgrid.send(email)
    console.log('Response = ', response)
  } catch (error) {
    console.error('Application error: ', error)
  }
}

main()
