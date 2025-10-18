import { connection } from "../api/utils/connection.js";

export async function consultarCredenciais(usuario, senha) {
    const comando = `
      SELECT id,
             usuario,
             role,
             criacao
        FROM users
       WHERE usuario = ?
         and senha = MD5(?)
    `;
  
    const [registros] = await connection.query(comando, [usuario, senha]);
    return registros[0];
  }

  export async function criarConta(novoLogin) {
    const comando = `
      INSERT INTO users (usuario, senha, role, criacao)
                 VALUES (?, MD5(?), ?, ?);
    `;
  
    const [info] = await connection.query(comando, [
      novoLogin.usuario,
      novoLogin.senha,
      novoLogin.role,
      new Date()
    ]);
    return info.insertId;
  }