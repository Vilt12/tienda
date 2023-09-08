import { useEffect, useState } from "react";
import AgregarProducto from "./AgregarProducto";
import "./administracion.css";
import axios from "axios";
import Navbar from "./nav-bar";
function Administracion() {

  const [productos, setProductos] = useState([]);

  useEffect(() => {
    // Realiza una solicitud GET al servidor para obtener la lista de productos
    axios.get("/api/productos/productos")
      .then((response) => {
        setProductos(response.data); // Establece la lista de productos en el estado
      })
      .catch((error) => {
        console.error("Error al obtener la lista de productos:", error);
      });
  }, []); // El [] asegura que este efecto se ejecute solo una vez al montar el componente
 
 
  const eliminarProducto = (productId) => {
    // Realiza una solicitud DELETE al servidor para eliminar el producto
    axios.delete(`/api/productos/productos/${productId}`)
      .then((response) => {
        alert(response.data.mensaje);
        // Actualiza la lista de productos después de eliminar uno
        setProductos(productos.filter((producto) => producto._id !== productId));
      })
      .catch((error) => {
        console.error("Error al eliminar el producto:", error);
      });
  };
return(
  
  <>
  
  <Navbar></Navbar>
<div className="Formulario">
<AgregarProducto></AgregarProducto>

<div>
      <h2>Lista de Productos</h2>
      <ul>
        {productos.map((producto) => (
          <li key={producto._id}>
            <h3>{producto.Nameproduct}</h3>
            <p>Precio: {producto.price}</p>
            <p>Descripción: {producto.description}</p>
            <button onClick={() => eliminarProducto(producto._id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>

</div>
   
    
    
    </>
)    
}
export default Administracion;