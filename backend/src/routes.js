import loginRota from './controller/loginController.js';
import livroRota from './controller/livrosController.js';

export default function Rotas(api) {
    api.use(loginRota)
    api.use(livroRota)
}