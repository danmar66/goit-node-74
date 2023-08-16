const base64 = require('base-64')
const md5 = require('md5')

async function main() {
  //   const password = 'wery strong password '
  const password =
    'wery strong password wery strong password wery strong password wery strong password wery strong password wery strong password '

  const password2 =
    'wery strong password wery strong password wery strong password wery strong password wery strong password wery strong password '

  const encoded = base64.encode(password)
  console.log('encoded = ', encoded)

  const decoded = base64.decode(encoded)
  console.log('decoded = ', decoded)

  const hash = md5(password)
  console.log('hash = ', hash)

  const hash2 = md5(password2)
  console.log('hash2 = ', hash2)
}

main()
