import './index.scss';
import { Link } from 'react-router';

export default function Header() {
  return (
    <div className="header">

      <div className="img">
        <img className='library-logo' src="/images/logo.png" alt="Logo da Livraria Frei" />
      </div>

      <h1>Livraria Frei</h1>

      <div className='div-links'>
        <Link className='links' to="/">Home</Link>
        <Link className='links' to="/criar_livro">Adicionar Livro</Link>
        <Link className='links' to="/login">Login</Link>
      </div>
    </div>
  );
}