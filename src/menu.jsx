import React from 'react';
import "./menu.css";
import Navbar  from "./nav-bar";
import { Link } from "react-router-dom";
import { useState } from 'react';
import "./carrito.css"
import Carrito from './carrito';
import { useEffect } from 'react';


 export function ProductList({ allProducts,
  setAllProducts,
  countProducts,
  setCountProducts,
  total,
  setTotal,
productos,
setProductos}) {
 /* _______________________________________________________________________________________________________________________________________________________________________________ */

 

/* ______________________________________________________________________ */


/* ______________________________________________________________________ */
  const Agregar=(product)=>{
  
 
   if(allProducts.find(item=>item.id===product.id)){
    const products=allProducts.map(item=>item.id===product.id?{...item, quantity: item.quantity +1 }:item);
 
    
  setTotal(total+product.price*product.quantity);
  setCountProducts(countProducts+product.quantity);
  setAllProducts([...allProducts,product]);
   return setAllProducts([...products]);
   } 

  
  
   
    setTotal(total+product.price*product.quantity);
  setCountProducts(countProducts+product.quantity);
  setAllProducts([...allProducts,product]);


  } 
  console.log(allProducts);
 
 
 return(
  <>
   
   <div className='Super-box'>
            {productos.map(producto => (
              <div key={producto.id} className='box-product'>
                <img src={producto.urlImage} height="180" width="180" alt="" />
                <div className="box-description">
                  <h4>{producto.Nameproduct}</h4>
                  <div className="box-description2">
                    <p className="description">{producto.description}</p>
                  </div>
                  <div className="box-price-button">
                    <p className="price">${producto.price}</p>
                    <button onClick={() => Agregar(producto)} className="button-29">Agregar</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
    </>
  );
}
 /* ____________________________________________________________________________________Menu___________________________________________________________________________________________ */


 


function Menu() {
  const [allProducts, setAllProducts] = useState([]);
 const [total, setTotal] = useState(0);
 const [countProducts, setCountProducts] = useState(0);

 const [productos, setProductos] = useState([]);



 useEffect(() => {
   // Realiza la solicitud para obtener los productos desde tu base de datos
   async function obtenerProductos() {
     try {
       const response = await fetch('/api/productos/productos');
       const data = await response.json();
       setProductos(data);
     } catch (error) {
       console.error('Error al obtener productos:', error);
     }
   }

   obtenerProductos();
 }, []);

    return(
      
        <div>   
            <Navbar></Navbar>
           
        <div className="box-menu">
         <div className="box-menu-2">

        
         <div className="box-menu-tittle">
            <h4>Menu</h4>    
         
         </div> 
          <Carrito  allProducts={allProducts}
              setAllProducts={setAllProducts}
              countProducts={countProducts}
              setCountProducts={setCountProducts}
              total={total}
              setTotal={setTotal}/>
          <div>
      
       
                    </div>
         <div>
            <div className="box-menu-subtittle">
 <Link  to="/menu">Cafe</Link>
 <Link  to="/menu-comida">Comida</Link>
 
            </div>
         
           <ProductList
           productos={productos}
           setProductos={setProductos}
           allProducts={allProducts}
              setAllProducts={setAllProducts}
              countProducts={countProducts}
              setCountProducts={setCountProducts}
              total={total}
              setTotal={setTotal} />
                   
                   
         </div>
       
         </div>
        </div>
        </div>
    )
}
export default Menu;

 /* ____________________________________________________________________________________Menu___________________________________________________________________________________________ */
    