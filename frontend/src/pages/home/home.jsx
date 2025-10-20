import Header from "../../components/navBar";
import Footer from "../../components/footer";
import './home.scss';
import CartaoDestaque from "../../components/cartaoDestaque";
import { useNavigate } from "react-router";
import { useEffect, useState } from "react";
import api from "../../api";

export default function Home() {
  const Navigate = useNavigate();
  const [usuario, setUsuario] =  useState("");
  const [livros, setLivros] = useState("");

  useEffect(() => {
    const nomeUsuario = localStorage.getItem("USUARIO");

    if (nomeUsuario == null || nomeUsuario == undefined) {
      Navigate("/login");
    } else{
      setUsuario(nomeUsuario);
    }
  }, []);

  function Sair() {
    localStorage.removeItem("USUARIO");
    localStorage.removeItem("TOKEN");
    Navigate("/login");
  }

  async function listarLivro() {
    const response = await api.get("/livros");
    setLivros(response.data);
  }



  return (
    <div>
      <Header />
      <div className="main">
        <h1>Bem Vindo, {usuario}</h1>

        {livros.map(livros => <div>
          <img height={150} src={livros.capa_URL} />
          <h1>{livros.titulo}</h1>
          <h2>{livros.autor}</h2>
        </div>)}

        <button onClick={Sair}>Sair</button>
        <button onClick={listarLivro}>Listar</button>
      </div>
      <Footer />
    </div>
  );
}