import { connection } from "../api/utils/connection.js";

export async function consultarCredenciais(usuario, senha) {
    const comando = `
      SELECT id,
             nome,
             senha
        FROM users
       WHERE nome = ?
         and senha = ?
    `;

    const [registros] = await connection.query(comando, [usuario, senha]);
    return registros[0];
  }

  export async function criarConta(novoLogin) {
    const comando = `
      INSERT INTO users (usuario, senha)
                 VALUES (?, ?);
    `;
  
    const [info] = await connection.query(comando, [
      novoLogin.usuario,
      novoLogin.senha
    ]);
    return info.insertId;
  }