const fs = require('fs/promises')

const filePath = './data2.txt'

const fileOperation = async ({ action, data }) => {
  switch (action) {
    case 'read':
      //   const result = await fs.readFile(filePath)
      //   const text = result.toString()
      //   console.log(text)

      const result = await fs.readFile(filePath, 'utf-8')
      console.log(result)
      break

    case 'add':
      const append = await fs.appendFile(filePath, data)
      console.log(append)
      break
    case 'replace':
      const replace = await fs.writeFile(filePath, data)
      console.log(replace)
      break
    case 'rename':
      const rename = await fs.rename(filePath, './data.txt')
      console.log(rename)
      break
    case 'remove':
      const remove = await fs.unlink(filePath)
      console.log(remove)
      break
    default:
      console.log('Unknown action')
      break
  }
}

// fileOperation({ action: 'read' })
// fileOperation({ action: 'add', data: 'Hello' })
// fileOperation({
//   action: 'replace',
//   data: 'Тільки люди здатні проливати кров за мир у всьому світі',
// })
// fileOperation({ action: 'rename' })
// fileOperation({ action: 'remove' })
