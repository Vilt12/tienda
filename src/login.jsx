import "./login.css"
import Navbar from "./nav-bar";
import Register from "./register";
import { Link } from "react-router-dom";
function Login() {
    return(
     <div>
        <Navbar></Navbar>
         <div className="box-login">
     
         <form className="form-login" action="">
            <div className="box-img">
                <img src="https://cdn-icons-png.flaticon.com/128/4745/4745657.png" alt="" />
            </div>
            <div className="box-tittle">
               <h4>Iniciar Sesion</h4>
            </div>
            <div className="box-input">
                 <input placeholder="Gmail" type="text" />
            <input placeholder="Contraseña" type="password" />
            </div>
           
            <div className="box-button">
                <button>Iniciar</button>
            </div>
            <div className="box-link" >
         <Link to="/register"> No tengo cuenta</Link>
            </div>
         </form>
        </div>
     </div>
    
    )
}
export default Login;