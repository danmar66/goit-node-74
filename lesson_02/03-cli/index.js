const books = require('./books')

// const yargs = require('yargs')
// const { hideBin } = require('yargs/helpers')

const { program } = require('commander')

const invokeAction = async ({ action, id, title, author }) => {
  switch (action) {
    case 'getAll':
      const all = await books.getAll()
      console.log(all)
      break

    case 'getById':
      const oneBook = await books.getById(id)
      console.log(oneBook)
      break

    case 'add':
      const newBook = await books.add({ title, author })
      console.log(newBook)
      break

    case 'updateById':
      const updatedBook = await books.updateById(id, { title, author })
      console.log(updatedBook)
      break

    case 'removeById':
      const removedBook = await books.removeById(id)
      console.log(removedBook)
      break

    default:
      console.log('Unknown action')
      break
  }
}

// invokeAction({ action: 'getAll' })
// invokeAction({ action: 'getById', id: 'u9kgwNWGi3uUUwh0b8V49+' })
// invokeAction({ action: 'add', title: '1984', author: 'George Orwell' })
// invokeAction({
//   action: 'updateById',
//   id: 'czlDWYlBU7Tb9kyxGAy4E1',
//   title: '1980',
//   author: 'George Orwell',
// })
// invokeAction({ action: 'removeById', id: 'czlDWYlBU7Tb9kyxGAy4E' })

/// --- Self write

// const actionIndex = process.argv.indexOf('--action')
// if (actionIndex !== -1) {
//   const action = process.argv[actionIndex + 1]
//   invokeAction({ action })
// }

/// --- Yargs

// const arr = hideBin(process.argv)
// // console.log(arr)

// const { argv } = yargs(arr)
// // console.log(argv)

// invokeAction(argv)

/// --- Commander

program
  .option('-a, --action <type>')
  .option('-i, --id <type>')
  .option('-t, --title <type>')
  .option('-at, --author <type>')

program.parse()

const options = program.opts()

invokeAction(options)
