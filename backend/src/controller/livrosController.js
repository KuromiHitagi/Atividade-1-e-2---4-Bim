import {Router}  from 'express'
import * as repo from '../repo/livrosRepo.js'
import { getAuthentication } from '../utils/JWT.js'

const Authentication = getAuthentication()
const endpoints = Router()

endpoints.post('/livro/add', Authentication, async (req, resp) => {
    let novoLivro = req.body;

    let id = await repo.addLivro(novoLivro);
    resp.send({ novoId: id });
})

endpoints.get('/livros', Authentication, async (req, resp) => {
    let lista = await repo.getAllLivros();
    resp.send(lista);
})

endpoints.delete('/livro/:id/delete', Authentication, async (req, resp) => {
    let id = req.params.id;

    let linhas = await repo.deleteLivros(id);
    if (linhas == 0) {
        resp.status(404).send({ erro: "Livro não encontrado" });
    } else {
        resp.send({ apagados: linhas });
    }
})

export default endpoints;