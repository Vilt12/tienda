import React from "react";
import Navbar from "./nav-bar";
import Foother from "./foother";
import { LoginButton } from "./Login0";
import "./noprofile.css";
function NoProfile() {
    return(
        <div>
            <Navbar></Navbar>
             <div className="box-aviso">
               <h4>Lo siento, para acceder necesita <LoginButton></LoginButton> </h4>
             </div>
    
        </div>
    )
}
export default NoProfile;