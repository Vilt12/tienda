import React from 'react';
import "./menu.css";
import Navbar  from "./nav-bar";
import { Link } from "react-router-dom";
import Menucomida from "./menu-comida";

function Menu() {

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
                   
                          <img src="https://us.123rf.com/450wm/karandaev/karandaev1211/karandaev121100234/16538221-caf%C3%A9-espresso-en-la-taza-de-cristal-aislado-en-fondo-blanco.jpg"  height="180" width="180" alt="" />
                         <div className="box-description">
            
                        
                             <h4>Espresso</h4>
                      
                         <div className="box-description2">
                          <p className="description"> Intenso y concentrado, con una capa dorada de crema en la parte superior. Sabor audaz y equilibrado entre notas amargas y dulces.</p>
                        
                        </div>
                   
                        
                                 <div className="box-price-button">
                                 <p className="price">$3500</p>
                        <button className="button-29"> Agregar </button>
                        </div>
                        
                         </div>     
                         
                        
                    </div>  
                    
            <div className="box-product">
                   
                   <img src="https://img.freepik.com/fotos-premium/capuchino-cafe-caliente-espuma-sobre-fondo-blanco_33725-33.jpg"  height="180" width="180" alt="" />
                  <div className="box-description">
     
                 
                      <h4> Cappuccino</h4>
                  
                      <div className="box-description2">
                   <p className="description">Espresso combinado con leche al vapor y espuma. Experiencia equilibrada y cremosa con una presentación decorativa.</p>
                 
                 
            </div>
                 
                          <div className="box-price-button">
                          <p className="price">$3500</p>
                 <button className="button-29"> Agregar </button>
                 </div>
                 
                    
                   </div>  
                 
             </div>  
                    
            <div className="box-product">
                   
                   <img src="https://us.123rf.com/450wm/serezniy/serezniy2206/serezniy220618370/187438298-vaso-de-cerveza-fr%C3%ADa-con-paja-y-granos-de-caf%C3%A9-sobre-fondo-blanco.jpg"  height="180" width="180" alt="" />
                  <div className="box-description">
     
                 
                      <h4>Cold Brew</h4>
                  
                      <div className="box-description2">
                   <p className="description">Bebida refrescante y menos ácida que el café caliente. Sabor suave y dulce, ideal con hielo y opciones de personalización.</p>
                 </div>
                 
            
                 
                          <div className="box-price-button">
                          <p className="price">$3500</p>
                 <button className="button-29"> Agregar </button>
                 </div>
                 
                    
                   </div>  
                 
             </div> 
             <div className="box-product">
                   
                   <img src="https://www.starbucksathome.com/es/sites/default/files/styles/overview_banner_image/public/2021-06/10032021_CafeMocha_CS-min_0.png?h=07cea122&itok=v5H4r_wG"  height="180" width="180" alt="" />
                  <div className="box-description">
     
                 
                      <h4>Mocha</h4>
                      <div className="box-description2">
                  
                   <p className="description"> Espresso con leche al vapor y chocolate. Deliciosa mezcla de sabores de café y chocolate, con opción de crema batida y chocolate rallado.</p>
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
export default Menu;