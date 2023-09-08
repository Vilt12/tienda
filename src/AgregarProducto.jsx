import React from "react";
import { useState } from "react";
import axios from "axios";
import { v4 as uuidv4 } from 'uuid';


function AgregarProducto() {
    // Generar un identificador único
const uniqueId = uuidv4();
    const [Nameproduct,setNameproduct]=useState("")
const [price,setprice]=useState("")
const [description,setdescription]=useState("")
const [quantity,setquantity]=useState(1)
const [urlImage,seturlImage]=useState("")
const idProducto = uuidv4();

function AgregarP() {
    const producto={
        idProducto: idProducto,
        Nameproduct:Nameproduct,
        price:price,
        description:description,
        quantity:quantity,
        urlImage:urlImage
    }

    console.log(producto);

    axios.post("/api/productos/AgregarProducto",producto)
    .then(res=>{
        alert(res.data)
    })  
    .then(err=>{console.log(err)})
}

    return(
        <>
        <label>Imagen del producto</label>
        <input type="text" value={urlImage} onChange={(e)=>{seturlImage(e.target.value)}}  />
        <label htmlFor="">Nombre del Producto</label>
        <input type="text" value={Nameproduct} onChange={(e)=>{setNameproduct(e.target.value)}} />
        <label htmlFor="">Precio</label>
        <input type="number" value={price} onChange={(e)=>{setprice(e.target.value)}} />
        <label htmlFor="">Descripcion</label>
        <input type="text" value={description} onChange={(e)=>{setdescription(e.target.value)}} />
        <button onClick={AgregarP}>Agregar Producto</button>
        </>
    )
}

export default AgregarProducto