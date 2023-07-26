const path = require('path')

const join = path.join('/home', '/daniel', '/documents')
console.log(join)
// '/home/daniel/documents'

const resolve = path.resolve('/home', '/daniel', 'documents')
console.log(resolve)
// '/documents'
