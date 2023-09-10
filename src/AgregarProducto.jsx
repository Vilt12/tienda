import React from "react";
import { useState } from "react";
import axios from "axios";



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
        <label>Imagen del producto</label>
        <input  type="text" value={urlImage} onChange={(e)=>{seturlImage(e.target.value)}}  />
        <label htmlFor="">Nombre del Producto</label>
        <input  type="text" value={Nameproduct} onChange={(e)=>{setNameproduct(e.target.value)}} />
        <label htmlFor="">Precio</label>
        <input  type="number" value={price} onChange={(e)=>{setprice(e.target.value)}} />
        <label htmlFor="">Descripcion</label>
        <input  type="text" value={description} onChange={(e)=>{setdescription(e.target.value)}} />
        <button onClick={AgregarP}>Agregar Producto</button>
        </>
    )
}

export default AgregarProducto