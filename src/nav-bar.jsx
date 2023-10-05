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


function Navbar(){

    const{isAuthenticated,user,loginWithRedirect,email}=useAuth0();  
  


/* const { getAccessTokenSilently } = useAuth0();

  // Obtener el token de acceso
  const obtenerTokenDeAcceso = async () => {
    try {
      const accessToken = await getAccessTokenSilently();
      console.log('Token de acceso:', accessToken); */


  /*     // Puedes utilizar accessToken según tus necesidades
    } catch (error) {
      console.error('Error al obtener el token de acceso:', error);
    }
  };
  obtenerTokenDeAcceso(); */

  // Verificar si el usuario tiene un rol específico
  



       return(
        <nav className="Barra__navegacion">
       
             <div className="Barra__navegacion-box">

            
            <div className="Barra__navegacion-1">
                <Link referrerPolicy="no-referrer" crossOrigin="anonymus" to="/"><img src="https://cdn-icons-png.flaticon.com/128/2935/2935500.png" alt="" width={"70px"} height={"70px"} /> </Link>
       
              {isAuthenticated?(<> <Link to="/menu">Menu</Link> </>):(<> <Link to="/noprofile">Menu</Link> </>)}
               <Link crossOrigin="anonymous" referrerPolicy="no-referrer" to="/contacto">Contacto</Link>
               
               {(user&&user.email==="admin2125@gmail.com") ?(<><Link crossOrigin="anonymous" referrerPolicy="no-referrer" to="/administracion">Administracion</Link> <Link crossOrigin="anonymous" referrerPolicy="no-referrer" to="/AgregarProducto">Agregar producto</Link></>):(<></>)} 
         
             <div className="Barra__navegacion-usuario">
    
         {isAuthenticated?(<> <LogoutButton></LogoutButton> <Profile></Profile>   </> ):(<LoginButton></LoginButton>  )}
    
             </div>
       
                
            </div>
           
          </div>
           
                  
        </nav>
    )
}
export default Navbar;