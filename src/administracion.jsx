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

  const [productoEditando, setProductoEditando] = useState(null);
  
  
  const handleInputChange = (field, value) => {
    setProductoEditando({
      ...productoEditando,
      [field]: value,
    });
  };
  
  const guardarCambios = (e) => {
    e.preventDefault();
    // Realiza una solicitud PUT al servidor para actualizar el producto
    axios.put(`/api/productos/productos/${productoEditando._id}`, productoEditando)
      .then((response) => {
        alert(response.data.mensaje);
        setProductoEditando(null); // Limpia el estado de productoEditando
      
      })
      .catch((error) => {
        console.error("Error al actualizar el producto:", error);
      });
  };
  
  const cancelarEdicion = () => {
    setProductoEditando(null);
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
            <button onClick={() => setProductoEditando(producto)}>Editar</button>
          </li>
        ))}

      </ul>
      {productoEditando && (
  <div>
    <h2>Editar Producto</h2>
    <form onSubmit={guardarCambios}>
      <label>Nombre del Producto:</label>
      <input
        type="text"
        value={productoEditando.Nameproduct}
        onChange={(e) => handleInputChange("Nameproduct", e.target.value)}
      />
      <label>Precio:</label>
      <input
        type="number"
        value={productoEditando.price}
        onChange={(e) => handleInputChange("price", e.target.value)}
      />
      <label>Descripción:</label>
      <textarea
        value={productoEditando.description}
        onChange={(e) => handleInputChange("description", e.target.value)}
      ></textarea>
      <button type="submit">Guardar Cambios</button>
      <button onClick={cancelarEdicion}>Cancelar</button>
    </form>
  </div>
)}

    </div>

</div>
   
    
    
    </>
)    
}
export default Administracion;