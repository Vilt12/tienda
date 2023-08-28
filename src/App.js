import React from 'react';
import './App.css';
import Main from './Main';
import Menu from"./menu";
import { Route,Routes } from 'react-router-dom';
import Menucomida from './menu-comida';
import Contacto from './contacto';
import NoProfile from './noprofile';
import { useState } from 'react';
import Carrito from './carrito';


function App() {
  const [allProducts, setAllProducts] = useState([]);
	const [total, setTotal] = useState(0);
	const [countProducts, setCountProducts] = useState(0);
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
