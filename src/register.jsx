import React from 'react';
import Navbar from "./nav-bar";
import "./register.css"

function Register() {
  return(
    <div>
        <Navbar></Navbar>
         <div className="box-register">
     
         <form className="form-register" action="">
            <div className="box-img">
                <img src="https://cdn-icons-png.flaticon.com/128/3534/3534139.png" alt="" />
            </div>
            <div className="box-register-tittle">
               <h4>Registrarse</h4>
            </div>
            <div className="box-register-input">
                <input placeholder="Nombre de usuario" type="text" />
                 <input placeholder="Gmail" type="text" />
            <input placeholder="Contraseña" type="password" />
            </div>
           
            <div className="box-register-button">
                <button>Registrarse</button>
            </div>
          
         </form>
        </div>
        
     </div>
  )
  
}
export default Register;