import fs from 'fs/promises'
import path from 'path'

import { fileURLToPath } from 'url'
import { dirname } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

async function readMovie() {
  const filePath = path.resolve(__dirname, 'movie.txt')
  const text = await fs.readFile(filePath, 'utf-8')
  console.log(text)
}

export default readMovie
