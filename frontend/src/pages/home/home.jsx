import Header from "../../components/navBar/index.jsx";
import Footer from "../../components/footer/index.jsx";
import './home.scss';
import { useNavigate } from "react-router";
import { useEffect, useState } from "react";
import api from "../../api.js";

export default function Home() {
  const Navigate = useNavigate();
  const [usuario, setUsuario] =  useState("");
  const [livros, setLivros] = useState([]);

  useEffect(() => {
    const nomeUsuario = localStorage.getItem("USUARIO");

    if (nomeUsuario == null || nomeUsuario == undefined) {
      Navigate("/login");
    } else{
      setUsuario(nomeUsuario);
      listarLivro();
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

        {livros.map(livro => <div key={livro.id}>
          <img height={150} src={livro.capa_URL} alt={livro.titulo} />
          <h1>{livro.titulo}</h1>
          <h2>{livro.autor}</h2>
        </div>)}

        <button onClick={Sair}>Sair</button>
        <button onClick={listarLivro}>Listar</button>
      </div>
      <Footer />
    </div>
  );
}