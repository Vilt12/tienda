import React from 'react';
import './App.css';
import Main from './Main';
import Menu from"./menu";
import { Route,Routes } from 'react-router-dom';
import Menucomida from './menu-comida';
import Contacto from './contacto';
import NoProfile from './noprofile';

import Administracion from './administracion';

function App() {
  


  
  return (



  <>
  
  <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/menu" element={<Menu></Menu>}></Route>
        <Route path='/menu-comida' element={<Menucomida/>}/>
        <Route path="noprofile" element={<NoProfile></NoProfile>}/>
        <Route path="/contacto" element={<Contacto/>}></Route>
        <Route path="/administracion" element={<Administracion/>}/>
      
      </Routes>
     
 </>
  
  
  );
}

export default App;
