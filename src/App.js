import React from 'react';
import './App.css';
import Main from './Main';
import Menu from"./menu";
import { Route,Routes } from 'react-router-dom';
import Menucomida from './menu-comida';
import Contacto from './contacto';
import NoProfile from './noprofile';
import Carrito from './carrito';


function App() {

/* Conexion a base de datos */
/* const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/test'); */

  return (



  <>
  
  <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/menu" element={<Menu  > <Carrito ></Carrito></Menu>}></Route>
        <Route path='/menu-comida' element={<Menucomida/>}/>
        <Route path="noprofile" element={<NoProfile></NoProfile>}/>
        <Route path="/contacto" element={<Contacto/>}></Route>
        
      
      </Routes>
     
 </>
  
  
  );
}

export default App;
