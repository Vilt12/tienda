import React from 'react';
import "./menu.css";
import Navbar  from "./nav-bar";
import { Link } from "react-router-dom";
import { data } from './data';
import { useState } from 'react';
import "./carrito.css"
import Carrito from './carrito';
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react';
import axios from "axios";


 export function ProductList({ allProducts,
  setAllProducts,
  countProducts,
  setCountProducts,
  total,
  setTotal,}) {
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
 /* _______________________________________________________________________________________________________________________________________________________________________________ */
  
/* const [preferenceId, setPreferenceId] = useState(null);

 initMercadoPago("TEST-c88d4477-4485-44f0-adbe-77e3cc706146");

 const createPreference = async (product) => {
  try {
    const response = await axios.post("http://localhost:8080/create_preference", {
      description: product.Nameproduct,
      price: product.price,
      quantity: 1, // Puedes ajustar esto según sea necesario
    });

    const { id } = response.data;
    return id;
  } catch (error) {
    console.log(error);
  }
};

 const handleBuy = async (product) => {
  const id = await createPreference(product);
  if (id) {
    setPreferenceId(id);
  }
}; */
  /* _______________________________________________________________________________________________________________________________________________________________________________ */
 
 return(
  <>
   
  <div className='Super-box'>
 
 
  {data.map(product=>(
  
<div key={product.id} className='box-product'>
<img src={product.urlImage}  height="180" width="180" alt="" />
                         <div className="box-description">
            
                        
                             <h4>{product.Nameproduct}</h4>
                      
                         <div className="box-description2">
                          <p className="description"> {product.description}</p>
                        
                        </div>
                   
                        
                                 <div className="box-price-button">
                                 <p className="price">${product.price}</p>
                        <button onClick={()=>Agregar(product)} className="button-29" > Agregar </button>
                       {/*  <button onClick={() => handleBuy(product)}>Comprar</button>
                        {preferenceId && <Wallet initialization={{ preferenceId }} /> } */}
                        </div>
                        
                         </div>     
                       
</div> 



  )

  
  
  )}



    </div>
    </>
  );
}
 /* ____________________________________________________________________________________Menu___________________________________________________________________________________________ */


 


function Menu() {
  const [allProducts, setAllProducts] = useState([]);
 const [total, setTotal] = useState(0);
 const [countProducts, setCountProducts] = useState(0);

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
    