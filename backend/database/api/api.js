import Rotas from './routes.js'
import express from 'express'
import cors from 'cors'

const api = express()
api.use(express.json())
api.use(cors())

Rotas(api)

api.listen(5000, () => console.log('API running on http://localhost:5000'))