
//Configurar server basico

const mongoose=require("mongoose")
const express=require("express")
const app=express()
const port= process.env.PORT ||5000;
const {Schema}=mongoose
const router=express.Router()
//Importacion de conexion DB

const archivoBD=require("./conexion")

const rutasProductos=require("./rutas/productos")


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



