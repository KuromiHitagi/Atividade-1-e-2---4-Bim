import {Router}  from 'express'
import * as repo from '../repo/loginRepo.js'
import { generateToken } from '../utils/JWT.js'

const endpoints = Router()

endpoints.post('/login/conta', async (req, resp) => {
    let novoLogin = req.body;
  
    let id = await repo.criarConta(novoLogin);
    resp.send({ novoId: id });
  })

endpoints.post('/login', async (req, resp) => {
    let usuario = req.body.usuario;
    let senha = req.body.senha;
  
    let credenciais = await repo.consultarCredenciais(usuario, senha);
  
    if (!credenciais) {
      resp.status(401).send({
        erro: 'Credenciais inválidas.'
      });
    }
    else {
      resp.send({
        token: generateToken(credenciais),
        usuario: credenciais.nome
      });
    }
  })

export default endpoints;