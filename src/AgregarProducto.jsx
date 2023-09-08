import React from "react";
import { useState } from "react";
import axios from "axios";

function AgregarProducto() {
    
    const [Nameproduct,setNameproduct]=useState("")
const [price,setprice]=useState("")
const [description,setdescription]=useState("")
    

function AgregarP() {
    const producto={
        Nameproduct:Nameproduct,
        price:price,
        description:description,
    
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