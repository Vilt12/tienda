import { useEffect, useState } from "react";
import "./administracion.css";
import axios from "axios";
import Navbar from "./nav-bar";
import Foother from "./foother";
import { useAuth0 } from "@auth0/auth0-react";
function Administracion() {
  

   
  const{isAuthenticated,user,email}=useAuth0();  
  
  useEffect(() => {
   if (user&&user.email==="admin2125@gmail.com") {
    
   } else {
      window.location.replace("/")
   }
 }, []);
  




const [productos, setProductos] = useState([]);
const [productoEditando, setProductoEditando] = useState(false);
const [categoriaSeleccionada, setCategoriaSeleccionada] = useState(null);
const [categories,setCategories]=useState("")
const [ordenarPrecio, setOrdenarPrecio] = useState(null);
const [Stock,SetStock]=useState("");
const[quantity,setQuantity]=useState();
const [orden, setOrden] = useState('asc'); 

  useEffect(() => {
    // Realiza una solicitud GET al servidor para obtener la lista de productos
    axios.get("https://backend-one-liart.vercel.app/api/productos/productos")
      .then((response) => {
        setProductos(response.data); // Establece la lista de productos en el estado
      })
      .catch((error) => {
        console.error("Error al obtener la lista de productos:", error);
      });
  }, []); // El [] asegura que este efecto se ejecute solo una vez al montar el componente
 
 
  const eliminarProducto = (productId) => {
    // Realiza una solicitud DELETE al servidor para eliminar el producto
    axios.delete(`https://backend-one-liart.vercel.app/api/productos/productos/${productId}`)
      .then((response) => {
        alert(response.data.mensaje);
        // Actualiza la lista de productos después de eliminar uno
        setProductos(productos.filter((producto) => producto._id !== productId));
      })
      .catch((error) => {
        console.error("Error al eliminar el producto:", error);
      });
  };

  
  

  const handleInputChange = (field, value) => {
    setProductoEditando({
      ...productoEditando,
      [field]: value,
    });
  };
  
  const guardarCambios = (e) => {
    e.preventDefault();
    // Realiza una solicitud PUT al servidor para actualizar el producto
    axios.put(`https://backend-one-liart.vercel.app/api/productos/productos/${productoEditando._id}`, productoEditando)
      .then((response) => {
        alert(response.data.mensaje);
        axios.get("https://backend-one-liart.vercel.app/api/productos/productos")
        .then((response) => {
          setProductos(response.data); // Actualiza la lista de productos
        })
        setProductoEditando(null); // Limpia el estado de productoEditando
      
      })
      .catch((error) => {
        console.error("Error al actualizar el producto:", error);
      });
  };
  
  const cancelarEdicion = () => {
    setProductoEditando(null);
  };


 
  const cambiarCategoria = (categories,quantity) => {
    setCategoriaSeleccionada(categories);
    SetStock(quantity)
  };
  
  
  // Filtra los productos por categoría seleccionada
  const productosFiltrados = productos.filter((producto) => {
    const categoriaCoincide = !categoriaSeleccionada || producto.categories === categoriaSeleccionada;
    const stockCoincide = Stock === '' || (Stock === '1' && producto.quantity === 1) || (Stock === '0' && producto.quantity !== 1);
    return categoriaCoincide && stockCoincide;
  })
  .sort((productoA, productoB) => {
    if (orden === 'asc') {
      return productoA.price - productoB.price;
    } else if (orden === 'desc') {
      return productoB.price - productoA.price;
    }
    return 0; // En caso de que no se especifique 'asc' o 'desc', no se aplica orden
  });
   
   


return(
  
  <div className="Super-box-administracion" > 
  
    <Navbar></Navbar>

  <div className="Formulario">
 



      <div className="body-table">


<table className="table_info">

  
  <thead>
    
    <tr>  
      <th>     
        <th><select type="text" value={categories} onChange={(e) =>{setCategoriaSeleccionada(e.target.value)}} >
    <option value="">Mostrar por categoria</option>
    <option value="Cafe">Cafe</option>
    <option value="Comida">Comida</option>
    <option value="">Todos</option>
    <option value="Bebida">Bebidas</option>
    <option value="Postre">Postres</option>
    <option value="Promocion">Promocion</option>
</select>
</th>
      Categoria</th>
      <th>Imagen del producto</th>
      <th>Nombre del producto</th>
      <th>
        <th><select type="text" value={orden} onChange={(e) =>{setOrden(e.target.value)}} >
    <option value="">Ordenar por Precio</option>
    <option value="asc">Menor a mayor</option>
    <option value="desc">Mayor a menor</option>
    <option value="">Todos</option>
</select></th>

        Precio</th>
      <th className="table_info_descripcion">Descripción</th>
     
      <th>
        <th><select type="number" value={quantity} onChange={(e) =>{SetStock(e.target.value)}} >
    <option value="">Mostrar por Stock</option>
    <option value="1">Hay stock</option>
    <option value="0">No hay stock</option>
    <option value="">Todos</option>
</select></th>

     Stock
      
      </th>
      <th>Acciones</th>
    </tr>
  </thead>
  <tbody>
    {productosFiltrados.map((producto) => (
      <tr key={producto._id}>
        <td>{producto.categories}</td>
        <td><img src={producto.urlImage} alt="" width={"80px"} height={"80px"} /></td>
        <td>{producto.Nameproduct}</td>
        <td>${producto.price}</td>
        <td >{producto.description}</td>    
        <td className={producto.quantity === 1 ? 'td-con-stock' : 'td-sin-stock'} >
          {producto.quantity===1?(
          <p>Hay stock</p>
        ):(
          <p>No hay stock</p>
        )}</td>
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
        <h4>Editar Producto</h4>
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

    <label >Stock</label>
    <select type="number" value={productoEditando.quantity } onChange={(e) =>{handleInputChange( "quantity",e.target.value)}}>
    <option value="1">Hay stock</option>
    <option value="0">No hay stock</option>
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
   
    <Foother></Foother>
    
    </div>
)    
}
export default Administracion;