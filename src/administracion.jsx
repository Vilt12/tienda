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

  const [productoEditando, setProductoEditando] = useState(false);
  

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


  const [editOper, setEditopen] = useState(false);

  

return(
  
  <div className="Super-box-administracion" > 
  
    <Navbar></Navbar>
 
  <div className="Formulario">
 


<div >
      <div className="body-table">


<table className="table_info">
  <thead>
    <tr>  
      <th>Categoria</th>
      <th>Imagen del producto</th>
      <th>Nombre del producto</th>
      <th>Precio</th>
      <th className="table_info_descripcion">Descripción</th>
      <th>Acciones</th>
    </tr>
  </thead>
  <tbody>
    {productos.map((producto) => (
      <tr key={producto._id}>
        <td>{producto.categories}</td>
        <td><img src={producto.urlImage} alt="" width={"80px"} height={"80px"} /></td>
        <td>{producto.Nameproduct}</td>
        <td>${producto.price}</td>
       
        <td>{producto.description}</td> 
        <td className="box-button-action">
          <button className="box-button-action-delete" onClick={() => eliminarProducto(producto._id)}>Eliminar</button>
          <button className="box-button-action-edit"  onClick={() => setProductoEditando(producto)}>Editar</button>
        </td>
      </tr>
    ))}
  </tbody>
</table>
</div>
      {productoEditando && (
        
  <div className={`box-edit ${handleInputChange ? "open" : ""}`}>
    <div classname="edit-title">
        <h2>Editar Producto</h2>
    </div>
  
    <form className="edit-form" onSubmit={guardarCambios}>
     
    <label>Url del producto:</label>
      <input
        type="text"
        value={productoEditando.urlImage}
        onChange={(e) => handleInputChange("urlImage", e.target.value)}
      />
    
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
       
       <label>Categoria:</label>
       
       <select type="text" value={productoEditando.categories} onChange={(e) =>{handleInputChange( "categories",e.target.value)}} >
    <option value="Cafe">Cafe</option>
    <option value="Comida">Comida</option>
    <option value="Bebida">Bebidas</option>
    <option value="Postre">Postres</option>
    <option value="Promocion">Promocion</option>
</select>
    
      <label>Descripción:</label>
      <textarea
        value={productoEditando.description}
        onChange={(e) => handleInputChange("description", e.target.value)}
      ></textarea>
     
      <div className="box-edit-button">
           <button type="submit">Guardar Cambios</button>
      <button onClick={cancelarEdicion}>Cancelar</button>
      </div>
   
     
    </form>
  </div>
)}
 
    </div>

</div>
   
    
    
    </div>
)    
}
export default Administracion;