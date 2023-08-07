import React from 'react';
import "./navbar.css";
import "./login";
import "./register";
import "./menu"
import { Link } from "react-router-dom";
function Navbar(){
    return(
        <nav className="Barra__navegacion">
       <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" integrity="sha512-4yD1dgz0RnnS/wauw4Hu5GCzA9FqS13iRc1nnmS4/JeyPhOwh9kzykJmOTDQhjsTeCnU29Sr6zZnCrclHjq4g==" crossorigin="anonymous" referrerpolicy="no-referrer" />
             <div className="Barra__navegacion-box">

            
            <div className="Barra__navegacion-1">
                <Link referrerPolicy="no-referrer" crossOrigin="anonymus" to="/"><img src="https://cdn-icons-png.flaticon.com/128/2935/2935500.png" alt="" width={"80px"} height={"80px"} /> </Link>
              {/*  <a href="/"><img src="https://cdn-icons-png.flaticon.com/128/2935/2935500.png" alt="" width={"80px"} height={"80px"} /></a> */}
               <Link referrerPolicy="no-referrer" crossOrigin="anonymus" to="/menu">Nuestro Menu</Link>
           
               <Link to="/contacto">Contacto</Link>
                
              
                
            </div>
           
          </div>
             <div className="Barra__navegacion-usuario">
             <Link  referrerPolicy="no-referrer" crossOrigin="anonymus" to="/login"> Iniciar sesion</Link>
              <Link referrerPolicy="no-referrer"  crossOrigin="anonymus" to="/register">Registrarse</Link>
             </div>
       
           
        </nav>
    )
}
export default Navbar;