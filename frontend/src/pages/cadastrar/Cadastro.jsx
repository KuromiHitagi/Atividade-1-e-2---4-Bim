import Footer from '../../components/footer/index.jsx'
import Header from '../../components/navBar/index.jsx'
import './Cadastro.scss'

fetch('http://localhost:5000/login/conta')

export default function Cadastro() {
    return(
        <div className='main'>
            <Header />
            <div className='form-cadastro'>
                <form>
                    <label htmlFor="usuario">Usuário:</label>
                    <br/>
                    <input className='form-info' type="usuario" name="usuario" required />
                    <br/>
                    <label htmlFor="senha">Senha:</label>
                    <br/>
                    <input className='form-info' type="password" name="senha" required />
                    <br/>
                    <button type="submit">Cadastrar</button>
                </form>
            </div>
            <Footer />
        </div>
    )
}