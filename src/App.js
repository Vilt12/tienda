import React from 'react';
import './App.css';
import Login from "./login";
import Register from "./register";
import Main from './Main';
import Menu from"./menu";
import { Route,Routes } from 'react-router-dom';
import Menucomida from './menu-comida';
import Contacto from './contacto';

function App() {
  return (

  <div>
  
  <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/menu" element={<Menu/>}></Route>
        <Route path='/menu-comida' element={<Menucomida/>}/>
        <Route path="/contacto" element={<Contacto/>}></Route>
      </Routes>
     
  </div>
  
  
  );
}

export default App;
