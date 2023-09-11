import Navbar from "./nav-bar";
import { Link } from "react-router-dom";
import "./contacto.css"
import React, { useEffect } from 'react';

function Contacto() {

  return(
        <div>
  <Navbar></Navbar>
  <div className="box-contacto">
<div className="box-icons">
   <Link to=""><img   src="https://cdn-icons-png.flaticon.com/128/733/733547.png" alt="" /></Link>
   <Link to=""><img   src="https://cdn-icons-png.flaticon.com/128/2111/2111463.png" alt="" /></Link>
   <Link to=""><img  src="https://cdn-icons-png.flaticon.com/128/2111/2111728.png" alt="" /></Link>
   <Link to=""> <img  src="https://cdn-icons-png.flaticon.com/128/732/732200.png" alt="" /></Link>

</div>
  
 
  </div>
 
        </div>
    )
}
export default Contacto;