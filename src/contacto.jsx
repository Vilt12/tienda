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

             <a href="https://wa.me/+1234567890"> <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/800px-WhatsApp.svg.png" alt="" /></a>
               
                 <a href="/"> <img src="https://cdn.pixabay.com/photo/2021/06/15/12/17/instagram-6338401_1280.png" alt="" /></a>
                 <a href="/">   <img src="https://www.facebook.com/images/fb_icon_325x325.png" alt="" /></a>
          
                  
                 
                    <a href="https://mail.google.com/mail/?view=cm&fs=1&to=gmail.com&su=Asunto&body=Cuerpo%20del%20mensaje"><img src="https://cdn-icons-png.flaticon.com/512/281/281769.png" alt="" /></a>
                    </div>
                </div>
                 
             

              
               
           </div>
                 
          
              
               
              
          
        </div>   
           
             
             
         </div>
     
        
       
    
     
   





  
 
        
    )
}
export default Contacto;