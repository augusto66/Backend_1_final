//SOLO VALIDO EN TYPE MODULE
//Usando commonjs __dirname ya está accesible globalmente
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const __filename = fileURLToPath(import.meta.url)
export const __dirname = join(dirname(__filename), '../../')

export const config = {
  dirname: __dirname,
  PORT: 3006,
  db: {
    connectionString: `mongodb+srv://root:RiPI2QQLdUbO4gvA@cluster0.yzpuw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`,
  },
}

console.log(config.dirname)
