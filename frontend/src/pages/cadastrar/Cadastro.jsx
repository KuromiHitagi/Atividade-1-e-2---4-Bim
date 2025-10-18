import { useState } from 'react'
import Footer from '../../components/footer/index.jsx'
import Header from '../../components/navBar/index.jsx'
import './Cadastro.scss'

export default function Cadastro() {
    const [usuario, setUsuario] = useState('')
    const [senha, setSenha] = useState('')

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
            } else {
                alert('Erro ao criar conta.')
            }
        } catch (error) {
            console.error('Erro:', error)
            alert('Erro ao conectar com o servidor.')
        }
    }

    return(
        <div className='main'>
            <Header />
            <div className='form-cadastro'>
                <form className='form' onSubmit={handleSubmit}>

                    <div className="user">
                        <label htmlFor="usuario">Usuário:</label>
                        <input className='form-info' type="text" name="usuario" placeholder='Digite seu nome aqui:' value={usuario} onChange={(e) => setUsuario(e.target.value)} required />
                    </div>
                    
                    <div className="password">
                        <label htmlFor="senha">Senha:</label>
                        <input className='form-info' type="password" name="senha" placeholder='Insira sua senha:' value={senha} onChange={(e) => setSenha(e.target.value)} required />   
                    </div>

                    <button className='sign-up_btn' type="submit">Cadastrar</button>
                </form>
            </div>
            <Footer />
        </div>
    )
}
