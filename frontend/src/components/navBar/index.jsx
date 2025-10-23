import './index.scss';
import { Link } from 'react-router-dom'; // cuidado: é 'react-router-dom', não 'react-router'
import { useState } from 'react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="header">
      <div className="img">
        <img className='library-logo' src="/images/logo.png" alt="Logo da Livraria Frei" />
      </div>

      <h1>Livraria Frei</h1>

      <div className='div-links'>
        <Link className='links' to="/">Home</Link>

        <div 
          className="dropdown"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className='links'>Livros ▾</span>
          {menuOpen && (
            <div className="dropdown-menu">
              <Link className='dropdown-item' to="/criar_livro">Adicionar Livro</Link>
              <Link className='dropdown-item' to="/editar_livro">Editar Livro</Link>
            </div>
          )}
        </div>

        <Link className='links' to="/login">Login</Link>
      </div>
    </div>
  );
}