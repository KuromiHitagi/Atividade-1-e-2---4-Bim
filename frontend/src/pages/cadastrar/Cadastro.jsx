import { useState } from 'react'
import Footer from '../../components/footer/index.jsx'
import Header from '../../components/navBar/index.jsx'
import './Cadastro.scss'
import { Link, useNavigate } from 'react-router'

export default function Cadastro() {
    const [usuario, setUsuario] = useState('')
    const [senha, setSenha] = useState('')
    const Navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await fetch('http://localhost:5000/login/conta', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    usuario,
                    senha,
                    role: 'user'
                })
            })
            if (response.ok) {
                alert('Conta criada com sucesso!')
                setUsuario('')
                setSenha('')
                Navigate('/login')
            } else {
                alert('Erro ao criar conta.')
            }
        } catch (error) {
            console.error('Erro:', error)
            alert('Erro ao conectar com o servidor.')
        }
    }

    return(
        <div className='beforeMain'>
            <Header />
            <main>
                <form className='form' onSubmit={handleSubmit}>

                    <div className="user">
                        <label htmlFor="usuario">Usuário:</label>
                        <input className='form-info' type="text" name="usuario" placeholder='Digite seu nome aqui:' value={usuario} onChange={(e) => setUsuario(e.target.value)} required />
                    </div>
                    
                    <div className="password">
                        <label htmlFor="senha">Senha:</label>
                        <input className='form-info' type="password" name="senha" placeholder='Insira sua senha:' value={senha} onChange={(e) => setSenha(e.target.value)} required />   
                    </div>

                    <div className="btns">
                        <button className='linkTo_Login'>
                            <Link className='linkLogin' to='/login'>
                                Já tem uma conta?
                            </Link>
                        </button>

                        <button className='sign-up_btn' type="submit">Cadastrar</button>
                    </div>
                </form>
            </main>
            <Footer />
        </div>
    )
}
