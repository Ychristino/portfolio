// REACT IMPORTS
import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

//MODULES IMPORTS
import Menu from './modules/Menu';
import Projetos from './modules/Projetos/Projetos';
import Curriculum from './modules/Curriculum/Curriculum';
import Manutencao from './modules/Logado/Manutencao';

// BOOTSTRAP IMPORTS
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// CSS IMPORTS
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
function App() {
  return (
    <>
      {/* Barra de navegação */}
      <Row md={12}>
        <Menu />
      </Row>
        {/* Inicio Bloco Central */}
        <Row
          className='mb-2'
          lg={3} 
          md={1}
        >
          {/* Inicio Sidebar Esquerda */}
          <Col lg={2} md={12}>
            <Manutencao />
          </Col>
          {/* Final Sidebar Esquerda */}

            {/* Inicio Conteúdo da página */}
            <Col lg={8} md={12}>
            
              <BrowserRouter>
                <Routes>
                  
                  <Route 
                    exact
                    path='/' 
                    element={""} 
                  />

                  <Route 
                    exact
                    path='/curriculo' 
                    element={<Curriculum />} 
                  />

                  <Route 
                    path='/projetos' 
                    element={<Projetos />} 
                  />

                  <Route 
                    path='*' 
                    element={<h1>Page not found</h1>} 
                  />

                </Routes>
              </BrowserRouter>
            </Col>
            {/* Final Conteúdo da página */}

            
            {/* Inicio Sidebar Direita */}
            <Col lg={2} md={12}>
              
            </Col>
            {/* Final Sidebar Direita */}
          
          </Row>
          {/* Final Bloco Central */}

  </>
  );
}

export default App;
