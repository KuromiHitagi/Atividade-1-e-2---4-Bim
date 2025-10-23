import { Link, useNavigate } from 'react-router';
import Footer from '../../components/footer/index.jsx';
import Header from '../../components/navBar/index.jsx';
import './Login.scss';
import { useEffect, useState } from 'react';
import api from '../../api.js';

export default function Login() {
    const [usuario, setUsuario] =  useState("");
    const [senha, setSenha] = useState(""); 
    const Navigate = useNavigate();

    useEffect(() => {
        const nomeUsuario = localStorage.getItem("USUARIO");

        if (nomeUsuario != null && nomeUsuario != undefined && nomeUsuario != "") {
            Navigate("/");
        }
    });

    async function entrar() {
        try {
            const body = {
                "usuario": usuario,
                "senha": senha
            }

            const response = await api.post("/login", body);
            const token = response.data.token;
            const nomeUsuario = response.data.usuario;

            localStorage.setItem("USUARIO", nomeUsuario);
            localStorage.setItem("TOKEN", token);

            alert(nomeUsuario)

            Navigate("/");
        } catch  (error) {
            alert("Error", error);
        }
    }

    return (
    <div>
        <Header />
        <main>
            <form onSubmit={entrar}>
                <div className="formdiv">
                    <label>Usuário: </label>
                    <input className='form-info' type='text' placeholder='usuário' value={usuario} onChange={(e) => setUsuario(e.target.value)}/>
                </div>

                <div className="formdiv">
                    <label>Senha: </label>
                    <input className='form-info' type='password' placeholder='senha' value={senha} onChange={(e) => setSenha(e.target.value)}/>  
                </div>  

                <div className="btns">
                        <button className='linkTo_Sign'>
                            <Link className='linkSign' to='/cadastro'>
                                Não tem uma conta?
                            </Link>
                        </button>

                        <button className='login-btn' type="submit">Entrar</button>
                    </div>
            </form>
        </main>
        <Footer />
    </div>
    );  
}