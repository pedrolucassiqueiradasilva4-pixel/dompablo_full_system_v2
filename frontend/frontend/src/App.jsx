// frontend/src/App.jsx
import React from 'react'
import { Link, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Services from './pages/Services'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'
import Agendar from './pages/Agendar'

export default function App(){
  return (
    <div className='app-root'>
      <header className='site-header'>
        <div className='brand'>Barbearia Dom Pablo</div>
        <nav className='nav'>
          <Link to='/'>Home</Link>
          <Link to='/services'>Serviços</Link>
          <Link to='/gallery'>Galeria</Link>
          <Link to='/contact'>Contato</Link>
          <Link className='cta' to='/agendar'>Agendar</Link>
        </nav>
      </header>

      <main className='site-main'>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/services' element={<Services/>} />
          <Route path='/gallery' element={<Gallery/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/agendar' element={<Agendar/>} />
          <Route path='*' element={<Home/>} />
        </Routes>
      </main>

      <footer className='site-footer'>
        <div>© {new Date().getFullYear()} Barbearia Dom Pablo</div>
      </footer>
    </div>
  )
}

