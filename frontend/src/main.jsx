import { BrowserRouter, Routes, Route } from 'react-router'
import { createRoot } from 'react-dom/client'
import './index.scss'

import Home from './pages/home/home.jsx'
import Criar_Livro from './pages/Criar_Livro/Criar_Livro.jsx'
import Cadastro from './pages/cadastrar/Cadastro.jsx'
import Login from './pages/login/Login.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/criar_livro" element={<Criar_Livro />} />
      <Route path='/cadastro' element={<Cadastro />}/>
      <Route path='/login' element={<Login />} />
    </Routes>
  </BrowserRouter>,
)
