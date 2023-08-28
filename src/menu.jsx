import React from 'react';
import "./menu.css";
import Navbar  from "./nav-bar";
import { Link } from "react-router-dom";
import { data } from './data';
import { useState } from 'react';
import "./carrito.css"
import Carrito from './carrito';


 export function ProductList({ allProducts,
  setAllProducts,
  countProducts,
  setCountProducts,
  total,
  setTotal,}) {
 /* _______________________________________________________________________________________________________________________________________________________________________________ */




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
         
           <ProductList allProducts={allProducts}
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
    