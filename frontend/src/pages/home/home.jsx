import Header from "../../components/navBar/index.jsx";
import Footer from "../../components/footer/index.jsx";
import CartaoDestaque from "../../components/cartaoDestaque/index.jsx"
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
      Navigate("/cadastro");
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
      <main>
        <h1>Bem Vindo, {usuario}</h1>

        {livros.map(livro => <div className="divLivro" key={livro.id}>
          <CartaoDestaque
              img={livro.capa_url.startsWith('http') ? livro.capa_url : `http://localhost:5000${livro.capa_url}`}
              titulo={livro.titulo}
              autor={livro.autor}
            />
        </div>
          )
        }

        <button onClick={Sair}>Sair</button>
        <button onClick={listarLivro}>Listar</button>
      </main>
      <Footer />
    </div>
  );
}