import mysql2 from 'mysql2/promise'

const connection = await mysql2.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'react'
})

export { connection };