import React from "react";
import { useState } from "react";
import axios from "axios";
import Navbar from "./nav-bar";
import "./Agregarproducto.css"
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";
function AgregarProducto() {
   
  const{isAuthenticated,user,email}=useAuth0();  
  
  useEffect(() => {
   if (user&&user.email==="admin2125@gmail.com") {
    
   } else {
      window.location.replace("/")
   }
 }, []);
  
  
  
  // Generar un identificador único

    //Estados locales, se inicializan vacios y quantity con un valor predeterminado en 1 uwu
const [Nameproduct,setNameproduct]=useState("")
const [price,setprice]=useState("")
const [description,setdescription]=useState("")
const [quantity]=useState(1)
const [urlImage,seturlImage]=useState("")
const [categories,setCategories]=useState("")
//

function AgregarP() {
  
  //Establecemos una condicion, si los datos que quiere enviar el usuario estan vacios, le sandra un mensaje para que los envie de forma correcta :D 
    if ((!Nameproduct || !description || !price || !urlImage ||!categories) ) {
        alert("Por favor, complete todos los campos");
      } else if(price<0){
        alert("No puede poner valores negativos")
      }
      else {
        //Si todo sale bien uwu, se crea el objeto(producto) con los valores enviados :3
        const producto = {
          Nameproduct: Nameproduct,
          price: price,
          description: description,
          quantity: quantity,
          urlImage: urlImage,
          categories:categories,
        };
    //
    //Realizamos una solicitud HTTP POST a la Ruta ("/api/producto/AgregarProducto") para agregar el producto a la base de datos uwu
        axios
          .post("https://backend-one-liart.vercel.app/api/productos/AgregarProducto", producto)
          .then((response) => {
            alert(response);
          }) 
          .catch((err) => {
            console.log(err);
          });
      }
    }
  //

    return(
        <>
<Navbar></Navbar>
<div className="box-agregarProducto">


<div className="Form-Agregarproducto" >
     <div className="Form-Agregarproducto-title">
      <h4>Agregar Producto</h4>
     </div>
        <input placeholder="Imagen del producto(URL)"  type="text" value={urlImage} onChange={(e)=>{seturlImage(e.target.value)}}  />
        
        <input placeholder="Nombre del producto"  type="text" value={Nameproduct} onChange={(e)=>{setNameproduct(e.target.value)}} />
    
        <input placeholder="Precio del producto"  type="number" value={price} onChange={(e)=>{setprice(e.target.value)}} />
      
        <input placeholder="Descripcion del producto"  type="text" value={description} onChange={(e)=>{setdescription(e.target.value)}} />

        <select type="text" value={categories} onChange={(e) =>{setCategories(e.target.value)}} >
    <option value="">Seleciona una categoria</option>
    <option value="Cafe">Cafe</option>
    <option value="Comida">Comida</option>
    <option value="Bebida">Bebidas</option>
    <option value="Postre">Postres</option>
    <option value="Promocion">Promocion</option>
</select>
       <div className="box-agregar-button">
<button onClick={AgregarP}>Agregar Producto</button>
       </div>
        
</div>
       </div>
        </>
    )
}

export default AgregarProducto