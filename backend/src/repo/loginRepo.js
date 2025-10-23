import { connection } from "./connection.js";
import { hashPassword } from "../utils/JWT.js";

export async function consultarCredenciais(usuario, senha) {
    const senhaHash = hashPassword(senha);
    const comando = `
      SELECT id,
             usuario,
             senha
        FROM users
       WHERE usuario = ?
         and senha = ?
    `;

    const [registros] = await connection.query(comando, [usuario, senhaHash]);
    return registros[0];
  }

  export async function criarConta(novoLogin) {
    const senhaHash = hashPassword(novoLogin.senha);
    const comando = `
      INSERT INTO users (usuario, senha)
                 VALUES (?, ?);
    `;

    const [info] = await connection.query(comando, [
      novoLogin.usuario,
      senhaHash
    ]);
    return info.insertId;
  }
