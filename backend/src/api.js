import Rotas from './routes.js'
import express from 'express'
import cors from 'cors'
import path from 'path'  // 🔹 import necessário

const api = express()
api.use(express.json())
api.use(cors())

// 🔹 libera acesso à pasta de imagens
api.use('/image', express.static(path.join(process.cwd(), 'public', 'image')))

Rotas(api)

api.listen(5000, () => console.log('API running on http://localhost:5000'))
