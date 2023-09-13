import React from 'react';
import "./navbar.css";
import "./login";
import "./register";
import "./menu"
import { Link } from "react-router-dom";
import { LoginButton } from './Login0';
import { LogoutButton } from './Logout';
import { Profile } from './Profile';
import { useAuth0 } from '@auth0/auth0-react';
import AgregarProducto from './AgregarProducto';
import Administracion from './administracion';


function Navbar(){

    const{isAuthenticated,user,loginWithRedirect,email}=useAuth0();  
  
       return(
        <nav className="Barra__navegacion">
       
             <div className="Barra__navegacion-box">

            
            <div className="Barra__navegacion-1">
                <Link referrerPolicy="no-referrer" crossOrigin="anonymus" to="/"><img src="https://cdn-icons-png.flaticon.com/128/2935/2935500.png" alt="" width={"80px"} height={"80px"} /> </Link>
       
              {isAuthenticated?(<> <Link to="/menu">Menu</Link> </>):(<> <Link to="/noprofile">Menu</Link> </>)}
               <Link to="/contacto">Contacto</Link>
               
               {/* (user&&user.name==="Admin")|| */(user&&user.email==="admin2125@gmail.com") ?(<><Link to="/administracion">Administracion</Link> <Link to="/AgregarProducto">Agregar producto</Link></>):(<></>)} 
         
           
                
            </div>
           
          </div>
             <div className="Barra__navegacion-usuario">
    
         {isAuthenticated?(<>    <LogoutButton></LogoutButton> <Profile></Profile></> ):(<LoginButton></LoginButton>  )}
    
             </div>
       
                  
        </nav>
    )
}
export default Navbar;