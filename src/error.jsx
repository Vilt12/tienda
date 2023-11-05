import "./error.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Error() {
    return(
        <>
        <div className="body-error">
         <div className="body-error-cuadro">
            <div className="body-error-icon">
            <FontAwesomeIcon icon={faCircleXmark} size="6x" color="red"></FontAwesomeIcon>  
            </div>
            <div className="body-error-titulo"> 
                <h4>Algo salio mal</h4>
            </div>
            <div className="body-error-mensaje">
              <p>El pago a realizar fallo, corrobore mercado pago para mas informacion</p>
                
                 </div>
                 <div className="body-error-link">
                 <Link to="https://tienda-lovat.vercel.app/">Volver</Link>
                 </div>
   
         </div>
        </div>
        </>
    )
}

export default Error;