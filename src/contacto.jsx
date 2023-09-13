import Navbar from "./nav-bar";
import { Link } from "react-router-dom";
import "./contacto.css"
import React, { useEffect } from 'react';

function Contacto() {

  return(
        <div>
  <Navbar></Navbar>
 
     
        
             <div className="section__box-contacto">
        
           <div  className='section__box-child-contacto'> 
      
            <div className="section__box-1-contacto">
               <h4>Contactanos</h4>
               <div className='section__box-2-contacto'>
                
                <p>"¡Conéctate con nosotros en nuestras redes sociales y en WhatsApp para estar al tanto de las últimas novedades y responderemos a tus preguntas!" </p>
               </div>
 <div className='section__box-redesSociales'>

             
               
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/800px-WhatsApp.svg.png" alt="" />
          
                  
                    <img src="https://cdn.pixabay.com/photo/2021/06/15/12/17/instagram-6338401_1280.png" alt="" />
                    <img src="https://www.facebook.com/images/fb_icon_325x325.png" alt="" />
                    
                    </div>
                </div>
                 
             

              
               
           </div>
                 
          
              
               
              
          
        </div>   
           
             
             
         </div>
     
        
       
    
     
   





  
 
        
    )
}
export default Contacto;