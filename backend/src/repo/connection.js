import mysql2 from 'mysql2/promise'

const connection = await mysql2.createConnection({
    host: 'localhost',
    user: 'root',
    password: '59762358',
    database: 'book_manager'
})

export { connection };