import { BrowserRouter, Routes, Route } from 'react-router'
import { createRoot } from 'react-dom/client'
import './index.scss'

import Home from './pages/home/home.jsx'
import Sobre from './pages/sobre/Sobre.jsx'
import Cadastro from './pages/cadastrar/Cadastro.jsx'
import Login from './pages/login/Login.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sobre" element={<Sobre />} />
      <Route path='/cadastrar' element={<Cadastro />}/>
      <Route path='/login' element={<Login />} />
    </Routes>
  </BrowserRouter>,
)
