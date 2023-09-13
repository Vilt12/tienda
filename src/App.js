import React from 'react';
import './App.css';
import Main from './Main';
import Menu from"./menu";
import { Route,Routes } from 'react-router-dom';
import Contacto from './contacto';
import NoProfile from './noprofile';
import AgregarProducto from './AgregarProducto';
import Administracion from './administracion';

function App() {
  


  
  return (



  <>
  
  <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/menu" element={<Menu></Menu>}></Route>
        <Route path="/noprofile" element={<NoProfile></NoProfile>}/>
        <Route path="/contacto" element={<Contacto/>}></Route>
        <Route path="/administracion" element={<Administracion/>}/>
        <Route path="/AgregarProducto" element={<AgregarProducto/>}/>
      </Routes>
     
 </>
  
  
  );
}

export default App;
