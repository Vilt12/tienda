import React from 'react';
import "./section-1.css"
import Navbar from "./nav-bar";
import { useAuth0 } from '@auth0/auth0-react';
import LluviaDeCafe from './LluviaDecafe';
function Section() {
    const{isAuthenticated,user}=useAuth0();  
   
  
    return(

        <div className="section__box">
        
           <div id="presentacion" className='section__box-child'> 
      
            <div className="section__box-1">
               {isAuthenticated?(<><h4>Bienvenido <b>{user.name}</b></h4></>):(<><h4>Bienvenido</h4></>)}
               <div className='section__box-2'>
                <p>Encuentra una gran variedad de productos a elegir para que tu paladar disfrute de un momento unico </p>
               </div>
 
                </div>
                 <div className='section__box-img'>
                    <img src="https://iparvendinggroup.com/wp-content/uploads/2022/05/maquinas-de-cafe.png" alt="" />
                    </div>
             

              
               
           </div>
                 
          
              
               
              
          
        </div>
       
    )
}
export default Section;