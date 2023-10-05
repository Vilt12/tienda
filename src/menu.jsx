import React from 'react';
import "./menu.css";
import Navbar  from "./nav-bar";
import { Link } from "react-router-dom";
import { useState } from 'react';
import "./carrito.css"
import Carrito from './carrito';
import { useEffect } from 'react';

import Foother from './foother';
 export function ProductList({ allProducts,
  setAllProducts,
  countProducts,
  setCountProducts,
  total,
  setTotal,
productos,
setProductos}) {

// busca un producto en una lista llamada allProducts para verificar si ya existe en el carrito. 
const Agregar = (product) => {
  const existingProductIndex = allProducts.findIndex(
    (item) => item.Nameproduct === product.Nameproduct //busca un producto cuyo nombre sea igual al nombre del producto que se pasa como argumento.
  );

  if (existingProductIndex !== -1) {
    // El producto ya existe en el carrito, incrementa la cantidad
    const updatedProducts = [...allProducts]; //Se crea una copia de la lista de todos los productos en el carrito utilizando el operador spread ([...allProducts]). Esto se hace para evitar modificar directamente el estado original sin crear una nueva instancia.
    updatedProducts[existingProductIndex].quantity += 1;

    setTotal(total + product.price);
    setCountProducts(countProducts + 1);
    setAllProducts(updatedProducts);
  } else {
    // El producto no existe en el carrito, agrégalo como nuevo
    const newProduct = { ...product, quantity: 1 };

    setTotal(total + product.price);
    setCountProducts(countProducts + 1);
    setAllProducts([...allProducts, newProduct]);
  }
};
const [categoriaSeleccionada, setCategoriaSeleccionada] = useState(null);

const cambiarCategoria = (categories) => {
  setCategoriaSeleccionada(categories);

};

// Arreglo que ocntiene los productos filtrados por categoria seleccionada. 
//Basicamente utilizamos prodcutos.filter para mostrar solo los productos que coinciden con la categoria seleccionada
//Y si no elegimos ninguna categoria o en este caso la categoria Todos que no tiene valor alguno, nos mostrara todos los productos 
const productosFiltrados = categoriaSeleccionada
  ? productos.filter((producto) => producto.categories === categoriaSeleccionada)
  : productos;


 
 return(
  <> 
  <div className='box-categories'>
  
      <button onClick={() => cambiarCategoria('Cafe')}>Cafe</button>
      <button onClick={() => cambiarCategoria('Comida')}>Comida</button>
      <button onClick={() => cambiarCategoria('Bebida')}>Bebidas</button>
      <button onClick={() => cambiarCategoria('')}>Todos</button>
      <button onClick={() => cambiarCategoria('Postre')}>Postres</button>
      <button onClick={() => cambiarCategoria('Promocion')}>Promociones</button>
   
  </div>
   
        
  <div className="Super-box">
   
    {productosFiltrados.map((producto)  => (
      <div key={producto._id} className="box-product">
       <div className='box-product-image'>
        <img src={producto.urlImage} height="180" width="180" alt="" />
       </div>
        <div className="box-description">
          <h4>{producto.Nameproduct}</h4>
          <div className="box-description2">
            <p className="description">{producto.description}</p>
          </div>
          <div className="box-price-button">
            <p className="price">${producto.price}</p>
            <button onClick={() => Agregar(producto)} className="button-29">
              +
            </button>
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
       const response = await fetch('https://backend-one-liart.vercel.app/api/productos/productos');
       const data = await response.json();
       setProductos(data);
     } catch (error) {
       console.error('Error al obtener productos:', error);
     }
   }

   obtenerProductos();
 }, []);

    return(
      
        <div >   
            <Navbar></Navbar>
           
        <div className="box-menu">
         <div className="box-menu-2">

        <div>

        </div>
         <div className="box-menu-tittle">
            <h4>Menu</h4>    
           

         </div> 
          <Carrito  allProducts={allProducts}
              setAllProducts={setAllProducts}
              countProducts={countProducts}
              setCountProducts={setCountProducts}
              total={total}
              setTotal={setTotal}/>
          <div className='Bordercito'>
      
       
                    </div>
         <div>
           
         
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
         <Foother></Foother>
        </div>
    )
}
export default Menu;

 /* ____________________________________________________________________________________Menu___________________________________________________________________________________________ */
    