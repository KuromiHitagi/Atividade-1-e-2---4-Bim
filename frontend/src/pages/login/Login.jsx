import { useNavigate } from 'react-router';
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

        if(nomeUsuario != null || nomeUsuario != undefined) {
            Navigate("/");
        }
    }, []);

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
            alert("Error");
        }
    }

    return (
    <div>
        <Header />
        <div className="main">
            <label>Usuário: </label>
            <input placeholder='usuário' value={usuario} onChange={(e) => setUsuario(e.target.value)}/>
            <br />
            <label>Senha: </label>
            <input placeholder='senha' value={senha} onChange={(e) => setSenha(e.target.value)}/>            
            <br />
            <br />
            <button onClick={entrar}>Entrar</button>
        </div>
        <Footer />
    </div>
    );  
}