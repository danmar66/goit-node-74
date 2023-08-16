const jwt = require('jsonwebtoken')

const JWT_SERCRET = 'WARNING secret information' // must be stored in .env file

async function main() {
  // generation token
  const payload = { id: 'YxhM4QDxPeA3SmPHcEZPJ' }

  const token = jwt.sign(payload, JWT_SERCRET, {
    expiresIn: '1',
  })

  console.log('Token = ', token)

  // check if token valid
  try {
    const result = jwt.verify(token, JWT_SERCRET)
    console.log('Validation result = ', result)
  } catch (error) {
    console.error('Verification error = ', error)
  }

  try {
    const expiredToken =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ill4aE00UUR4UGVBM1NtUEhjRVpQSiIsImlhdCI6MTY5MjIwNTc5MywiZXhwIjoxNjkyMjA1ODAzfQ.EyLPWg_Kd_JLrApf3v7_jlLVM1CQwIYMHtyDNz8_7lc'
    const result = jwt.verify(expiredToken, JWT_SERCRET)
    console.log('Result = ', result)
  } catch (error) {
    console.error('Verification error = ', error)
  }
}

main()
