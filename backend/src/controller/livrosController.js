import { Router } from 'express';
import * as repo from '../repo/livrosRepo.js';
import { getAuthentication } from '../utils/JWT.js';
import multer from 'multer';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const Authentication = getAuthentication();
const endpoints = Router();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuração do multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const dir = path.join(process.cwd(), 'public', 'image');
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    cb(null, dir);
  },
  filename: function (req, file, cb) {
    const uniqueName = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, uniqueName + path.extname(file.originalname));
  }
});

const upload = multer({ storage });


// ==========================
//  POST /livro/add
// ==========================
endpoints.post('/livro/add', Authentication, upload.single('capa'), async (req, resp) => {
  try {
    const { titulo, autor, capaUrl } = req.body;
    let finalCapaUrl;

    // Se veio arquivo, salva local
    if (req.file) {
      finalCapaUrl = `/image/${req.file.filename}`;
    }
    // Se não veio arquivo, mas veio URL manual
    else if (capaUrl) {
      finalCapaUrl = capaUrl;
    } else {
      return resp.status(400).send({ erro: 'Nenhuma capa fornecida.' });
    }

    const novoLivro = {
      titulo,
      autor,
      capaUrl: finalCapaUrl
    };

    const id = await repo.addLivro(novoLivro);
    resp.status(200).send({ novoId: id, capaUrl: finalCapaUrl });

  } catch (error) {
    console.error(error);
    resp.status(500).send({ erro: 'Erro ao adicionar livro.' });
  }
});


// ==========================
//  GET /livros
// ==========================
endpoints.get('/livros', Authentication, async (req, resp) => {
  let lista = await repo.getAllLivros();
  resp.send(lista);
});


// ==========================
//  DELETE /livro/:id/delete
// ==========================
endpoints.delete('/livro/:id/delete', Authentication, async (req, resp) => {
  let id = req.params.id;

  let linhas = await repo.deleteLivros(id);
  if (linhas == 0) {
    resp.status(404).send({ erro: "Livro não encontrado" });
  } else {
    resp.send({ apagados: linhas });
  }
});

export default endpoints;
