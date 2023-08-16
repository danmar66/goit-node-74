const bcrypt = require('bcrypt')

async function main() {
  const password = 'very strong password'

  const salt = await bcrypt.genSalt(12)
  //   console.log('salt = ', salt)

  const saltString = '$2b$10$9yDZtUI4ho2hTNA.HtT04O'

  hashed = await bcrypt.hash(password, salt)
  //   console.log('hashed = ', hashed)

  const hashedPassword =
    '$2b$12$xOeLiPS2X52YLZJLSVGjje6.z.qrA4YiITvsFZYyR7PwguT8eYWXu'

  const hashedPassword2 =
    '$2b$12$Q59.P3B9VzZkDbt1fobSxuxlt/JHsIIXWX60FfvQLNfMgpmMWzuIu'

  //   const isValid = await bcrypt.compare('very strong password', hashed)
  //   console.log('is Valid = ', isValid)

  const isValid1 = await bcrypt.compare('very strong password', hashedPassword)
  console.log('is Valid1 = ', isValid1)

  const isValid2 = await bcrypt.compare('very strong password', hashedPassword2)
  console.log('is Valid2 = ', isValid2)
}

main()
