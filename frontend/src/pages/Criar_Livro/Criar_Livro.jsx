import { useEffect, useState } from 'react';
import Header from '../../components/navBar/index.jsx';
import Footer from '../../components/footer/index.jsx';
import './index.scss';
import api from '../../api.js';
import { useNavigate } from 'react-router';

export default function Criar_Livro() {
  const [titulo, setTitulo] = useState('');
  const [autor, setAutor] = useState('');
  const [capaUrl, setCapaUrl] = useState('');
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const Navigate = useNavigate();

  useEffect(() => {
    const nomeUsuario = localStorage.getItem("USUARIO");

    if (nomeUsuario == null || nomeUsuario == undefined) {
      alert("Você só pode adicionar um livro se tiver feito o login");
      Navigate("/cadastro");
    }
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append('titulo', titulo);
      formData.append('autor', autor);

      if (file) {
        formData.append('capa', file);
      } else if (capaUrl) {
        formData.append('capaUrl', capaUrl);
      } else {
        alert('Por favor, selecione uma imagem ou forneça uma URL.');
        return;
      }

      const response = await api.post('/livro/add', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.status === 200) {
        alert('Livro adicionado com sucesso!');
        setTitulo('');
        setAutor('');
        setCapaUrl('');
        setFile(null);
        setPreview(null);
      } else {
        alert('Erro ao adicionar livro.');
      }
    } catch (error) {
      console.error('Erro:', error);
      alert('Erro ao conectar com o servidor.');
    }
  };

  // Funções da DropZone
  function handleDrop(e) {
    e.preventDefault();
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile && droppedFile.type.startsWith('image/')) {
      setFile(droppedFile);
      const imgURL = URL.createObjectURL(droppedFile);
      setPreview(imgURL);
    } else {
      alert('Por favor, solte apenas imagens!');
    }
  }

  function handleDragOver(e) {
    e.preventDefault();
  }

  function handleFileChange(e) {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      const imgURL = URL.createObjectURL(selectedFile);
      setPreview(imgURL);
    }
  }

  // Atualiza preview se o usuário colar um link manualmente
  function handleUrlChange(e) {
    const url = e.target.value;
    setCapaUrl(url);
    setFile(null); // Limpa o arquivo se URL for fornecida
    setPreview(url);
  }

  return (
    <div>
      <Header />
      <main className="criar-livro">
        <h2>Adicionar Livro</h2>

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Título:</label>
            <input
              type="text"
              value={titulo}
              onChange={(e) => setTitulo(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <label>Autor:</label>
            <input
              type="text"
              value={autor}
              onChange={(e) => setAutor(e.target.value)}
              required
            />
          </div>

          {/* DropZone */}
          <div
            className="drop-zone"
            onDrop={handleDrop}
            onDragOver={handleDragOver}
          >
            {preview ? (
              <img src={preview} alt="Prévia da capa" className="preview" />
            ) : (
              <p>Arraste e solte a capa do livro aqui<br />ou clique para selecionar</p>
            )}
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="file-input"
            />
          </div>

          {/* Campo opcional de URL */}
          <div className="input-group">
            <label>Ou cole a URL da capa:</label>
            <input
              type="text"
              placeholder="https://exemplo.com/imagem.jpg"
              value={capaUrl}
              onChange={handleUrlChange}
            />
          </div>

          <button type="submit">Adicionar Livro</button>
        </form>
      </main>
      <Footer />
    </div>
  );
}
