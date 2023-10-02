import React from 'react';
import './App.css';
import Main from './Main';
import Menu from"./menu";
import { Route,Routes } from 'react-router-dom';
import Contacto from './contacto';
import NoProfile from './noprofile';
import AgregarProducto from './AgregarProducto';
import Administracion from './administracion';

function App() {
  

//Configurar server basico

const mongoose=require("mongoose")
const express=require("express")
const app=express()
const port= process.env.PORT ||5000;
const {Schema}=mongoose
const router=express.Router()
//Importacion de conexion DB

const archivoBD=require("../conexion")

const rutasProductos=require("../rutas/productos")


const bodyParser=require("body-parser")
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:"true"}))



app.use("/api/productos" ,rutasProductos)

app.get("/" ,( req , res)=>{
    res.end("Bienvenido uwu")
})

app.get("/api/productos" ,( req , res)=>{
  res.end("Bienvenido uwu")
})

app.listen(port,function(){
    console.log("Se me hace que si esta funcando la wea ");
})



  
  return (



  <>
  
  <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/menu" element={<Menu></Menu>}></Route>
        <Route path="/noprofile" element={<NoProfile></NoProfile>}/>
        <Route path="/contacto" element={<Contacto/>}></Route>
        <Route path="/administracion" element={<Administracion/>}/>
        <Route path="/AgregarProducto" element={<AgregarProducto/>}/>
      </Routes>
     
 </>
  
  
  );
}

export default App;
