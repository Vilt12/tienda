import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "./navbar.css"
export const LoginButton=()=>{
    const{loginWithRedirect}=useAuth0();
    return <div className="box-iniciar"> <button className="boton-iniciar" onClick={()=>loginWithRedirect()}>Iniciar sesion </button></div>
}