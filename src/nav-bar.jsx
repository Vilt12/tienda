import React, { useEffect } from 'react';
import "./navbar.css";
import "./menu"
import { Link } from "react-router-dom";
import { LoginButton } from './Login0';
import { LogoutButton } from './Logout';
import { Profile } from './Profile';
import { useAuth0 } from '@auth0/auth0-react';
import AgregarProducto from './AgregarProducto';
import Administracion from './administracion';
import PerfilesAdmin from './perfiles-admin';

function Navbar(){

    const{isAuthenticated,user,loginWithRedirect,email}=useAuth0();  
  

       return(
        <nav className="Barra__navegacion">
       
             <div className="Barra__navegacion-box">

            
            <div className="Barra__navegacion-1">
                <Link referrerPolicy="no-referrer" crossOrigin="anonymus" to="/"><img src="https://images.vexels.com/media/users/3/223412/isolated/preview/bd3704cf52ba23499660b8bae7221daf-dise-o-plano-de-icono-de-tienda.png" alt="" width={"50px"} height={"50px"} /> </Link>
       
              {isAuthenticated?(<> <Link to="/menu">Menu</Link> </>):(<> <Link to="/noprofile">Menu</Link> </>)}
               <Link crossOrigin="anonymous" referrerPolicy="no-referrer" to="/contacto">Contacto</Link>
               
               {(user&&user.email==="admin2125@gmail.com") ?(<><Link crossOrigin="anonymous" referrerPolicy="no-referrer" to="/administracion">Administracion</Link>  <Link crossOrigin="anonymous" referrerPolicy="no-referrer" to="/AgregarProducto">Agregar producto</Link></>):(<></>)} 
         
             <div className="Barra__navegacion-usuario">
    
         {isAuthenticated?(<> <LogoutButton></LogoutButton> <Profile></Profile>   </> ):(<LoginButton></LoginButton>  )}
    
             </div>
       
                
            </div>
           
          </div>
           
                  
        </nav>
    )
}
export default Navbar;