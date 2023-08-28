import React from 'react';
import "./menu.css";
import Navbar  from "./nav-bar";
import { Link } from "react-router-dom";
import { useAuth0 } from '@auth0/auth0-react';
function Menucomida() {
  const{isAuthenticated,user,id}=useAuth0();  
  return(
        <div>   
            <Navbar></Navbar>
            
        <div className="box-menu">
         <div className="box-menu-2">

         
         <div className="box-menu-tittle">
            <h4>Menu</h4>
         </div>
         <div>
            <div className="box-menu-subtittle">
 <Link  to="/menu">Cafe</Link>
 
 <Link  to="/menu-comida">Comida</Link>

            </div>
           <div className="Super-box">

         
            <div className="box-product">
                   
                          <img src="https://dasilva.mx/wp-content/uploads/2022/04/Croissant-Almendras.jpg"  height="180" width="180" alt="" />
                         <div className="box-description">
            
                        
                             <h4>Croissant de almendra</h4>
                      
                         <div className="box-description2">
                          <p className="description"> Delicioso y hojaldrado croissant relleno de suave crema de almendra. Combina perfectamente con cualquier café para un desayuno o merienda deliciosa</p>
                        
                        </div>
                   
                        
                                 <div className="box-price-button">
                                 <p className="price">$3500</p>
                        <button className="button-29"> Agregar </button>
                        </div>
                        
                         </div>     
                         
                        
                    </div>  
                    
            <div className="box-product">
                   
                   <img src="https://st.depositphotos.com/16122460/54808/i/600/depositphotos_548083490-stock-photo-delicious-chocolate-brownies-with-fresh.jpg"  height="180" width="180" alt="" />
                  <div className="box-description">
     
                 
                      <h4> Brownie de chocolate</h4>
                  
                      <div className="box-description2">
                   <p className="description">Tierno y chocolatoso brownie, ideal para los amantes del chocolate. Su dulzura se equilibra con el amargor del café, creando una combinación exquisita.</p>
                 
                 
            </div>
                 
                          <div className="box-price-button">
                          <p className="price">$3500</p>
                 <button className="button-29"> Agregar </button>
                 </div>
                 
                    
                   </div>  
                 
             </div>  
                    
            <div className="box-product">
                   
                   <img src="https://storage.googleapis.com/avena-recipes/2019/10/1571780799455.jpeg"  height="180" width="180" alt="" />
                  <div className="box-description">
     
                 
                      <h4>Sándwich de pollo y aguacate</h4>
                  
                      <div className="box-description2">
                   <p className="description">Pan fresco relleno de tierna pechuga de pollo, aguacate cremoso y vegetales frescos. Un sabroso acompañamiento salado para disfrutar con tu café.</p>
                 </div>
                 
            
                 
                          <div className="box-price-button">
                          <p className="price">$3500</p>
                 <button className="button-29"> Agregar </button>
                 </div>
                 
                    
                   </div>  
                 
             </div> 
             <div className="box-product">
                   
                   <img src="https://img.freepik.com/fotos-premium/tarta-manzana-rodajas-aislado-sobre-fondo-blanco_185193-64349.jpg"  height="180" width="180" alt="" />
                  <div className="box-description">
     
                 
                      <h4>Tarta de manzana</h4>
                      <div className="box-description2">
                  
                   <p className="description">Una deliciosa tarta casera de manzana, con una masa crujiente y un relleno de manzanas tiernas y especias. Es el acompañamiento dulce perfecto para disfrutar junto con tu café.</p>
                 </div>
                 
            
                 
                          <div className="box-price-button">
                          <p className="price">$3500</p>
                 <button className="button-29"> Agregar </button>
                 </div>
                 
                    
                   </div>  
                 
             </div>   
                      </div>
                    
         </div>
    
         </div>
        </div>
        </div>
    )
}
export default Menucomida;