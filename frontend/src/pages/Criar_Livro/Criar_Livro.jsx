import { useState } from 'react';
import Header from '../../components/navBar/index.jsx';
import Footer from '../../components/footer/index.jsx';
import './index.scss';
import api from '../../api.js';

export default function Criar_Livro() {
  const [titulo, setTitulo] = useState('');
  const [autor, setAutor] = useState('');
  const [capaUrl, setCapaUrl] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post('/livro/add', {
        titulo,
        autor,
        capa_url: capaUrl
      });
      alert('Livro adicionado com sucesso!');
      setTitulo('');
      setAutor('');
      setCapaUrl('');
    } catch (error) {
      console.error('Erro:', error);
      alert('Erro ao adicionar livro.');
    }
  };

  return (
    <div>
      <Header />
      <div className="main">
        <h2>Adicionar Livro</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Título:</label>
            <input
              type="text"
              value={titulo}
              onChange={(e) => setTitulo(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Autor:</label>
            <input
              type="text"
              value={autor}
              onChange={(e) => setAutor(e.target.value)}
              required
            />
          </div>
          <div>
            <label>URL da Capa:</label>
            <input
              type="url"
              value={capaUrl}
              onChange={(e) => setCapaUrl(e.target.value)}
              required
            />
          </div>
          <button type="submit">Adicionar Livro</button>
        </form>
      </div>
      <Footer />
    </div>
  );
}
