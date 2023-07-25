const fs = require('fs')

const filePath = './data.txt'

const asyncFile = fs.readFile(filePath, 'utf-8', function (error, data) {
  console.log('Async read file')
  if (error) throw error
  console.log(data)
})

console.log('Sync file read')
const syncFile = fs.readFileSync(filePath, 'utf-8')
console.log(syncFile)
