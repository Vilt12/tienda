import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "./navbar.css"
export const LogoutButton=()=>{
    const {logout}=useAuth0();
    return <div className="box-boton-salir"><button className="boton-salir" onClick={()=> logout({returnTo: window.location.origin})}> Cerrar Sesion </button></div>
}
