import Rotas from './routes.js'
import express from 'express'

const api = express()
api.use(express.json())

Rotas(api)

api.listen(5000, () => console.log('API running on http://localhost:5000'))