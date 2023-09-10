import React from "react";
import { useState } from "react";
import axios from "axios";
import Navbar from "./nav-bar";
import "./Agregarproducto.css"

function AgregarProducto() {
    // Generar un identificador único

    const [Nameproduct,setNameproduct]=useState("")
const [price,setprice]=useState("")
const [description,setdescription]=useState("")
const [quantity,setquantity]=useState(1)
const [urlImage,seturlImage]=useState("")


function AgregarP() {
  
    if ((Nameproduct.length || description.length || price.length || urlImage.length) === 0||"") {
        alert("Por favor, complete todos los campos");
      } else {
        const producto = {
          Nameproduct: Nameproduct,
          price: price,
          description: description,
          quantity: quantity,
          urlImage: urlImage,
        };
    
        console.log(producto);
    
        axios
          .post("/api/productos/AgregarProducto", producto)
          .then((res) => {
            alert("Producto Agregado correctamente");
          })
          .catch((err) => {
            console.log(err);
          });
      }
    }

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
       <div className="box-agregar-button">
<button onClick={AgregarP}>Agregar Producto</button>
       </div>
        
</div>
       </div>
        </>
    )
}

export default AgregarProducto