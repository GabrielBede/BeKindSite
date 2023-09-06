import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Importing the page components
import Home from './pages';
import Sobrenos from './pages/sobrenos';
import Blog from './pages/blog';
import Doacoes from './pages/doacoes';
import Voluntario from './pages/voluntario';
import Eventos from './pages/eventos';
import Loja from './pages/loja';
import Doe from './pages/doe';

// Importing the Header component
import Header from './components/Header';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/sobrenos' element={<Sobrenos />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/doacoes' element={<Doacoes />} />
        <Route path='/voluntario' element={<Voluntario />} />
        <Route path='/eventos' element={<Eventos />} />
        <Route path='/loja' element={<Loja />} />
        <Route path='/doe' element={<Doe />} />
      </Routes>
    </Router>
  );
}

export default App;
