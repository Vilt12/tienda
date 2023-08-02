import "./navbar.css"
import "./login"
function Navbar(){
    return(
        <nav className="Barra__navegacion">
       <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" integrity="sha512-4yD1dgz0RnnS/wauw4Hu5GCzA9FqS13iRc1nnmS4/JeyPhOwh9kzykJmOTDQhjsTeCnU29Sr6zZnCrclHjq4g==" crossorigin="anonymous" referrerpolicy="no-referrer" />
             <div className="Barra__navegacion-box">

            
            <div className="Barra__navegacion-1">
               <a href="/"><img src="https://cdn-icons-png.flaticon.com/128/2935/2935500.png" alt="" width={"80px"} height={"80px"} /></a>
            
                <a href="">Nuestro menu</a>
                <a href="">Contacto</a>
                <a href="">Informacion</a>
              
                
            </div>
           
          </div>
             <div className="Barra__navegacion-usuario">
          
             <a href="./login.jsx">Iniciar sesion</a>
             <a href="">Registrarse</a> 
             </div>
       
           
        </nav>
    )
}
export default Navbar;