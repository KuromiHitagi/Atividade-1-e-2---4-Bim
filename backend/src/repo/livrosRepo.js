import { connection } from "./connection.js";

export async function addLivro(novoLivro) {
    const comando = `
    INSERT INTO books (capa_url, titulo, autor)
            VALUES (?, ?, ?);
    `;

    const [info] = await connection.query(comando, [
        novoLivro.capa_URL,
        novoLivro.titulo,
        novoLivro.autor,
    ]);
    return info.insertId;
}

export async function getAllLivros() {
    const comando = `select * from books`;
    const [info] = await connection.query(comando);
    return info;
}

export async function deleteLivros(id) {
    const comando = `delete from books where id = ?`;
    const [info] = await connection.query(comando, [id]);
    return info.affectedRows;
}