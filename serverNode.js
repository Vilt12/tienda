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





//Configuracion de servidor Express uwu
const cors = require("cors");
//

const mercadopago = require("mercadopago");


//REPLACE WITH YOUR ACCESS TOKEN AVAILABLE IN: https://developers.mercadopago.com/panel
//Uso de token para autenticar las solicitudes a la Api de MP
mercadopago.configure({
	access_token: "APP_USR-2050192253529060-082910-7aca82a1134f8547b624bd3dfdcbf6d6-1463144691"
});
//

//Configuracion para manejar solicitudes HTTP entrantes uwu(Json,URL codificados,CORS) este ultimo nos permite hacer solicitudes desde diferentes origenes
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("../../client/html-js"));
app.use(cors());
//

//Ruta Raiz
app.get("/", function(req,res){
    res.send("Si funciona uwu")
})
//


//Esta ruta ("/create_preference") maneja una solicitud POST que utiliza para crear una preferencia de pago en mercado pago
//Esta solicitud debe contener un objeto JSON con los elementos "items" y "totalAmount"
app.post("/create_preference", (req, res) => {
	const { items, totalAmount } = req.body;
  
	let preference = {
	  items: items,
	  // ... (otras configuraciones de preferencia)
	  back_urls: {
		success: "http://localhost:3000",
		failure: "http://localhost:3000",
		pending: "",
	  },
	  auto_return: "approved",
	};
  
	
	mercadopago.preferences
	  .create(preference)
	  .then(function (response) {
		res.json({
		  id: response.body.id,
		});
	  })
	  .catch(function (error) {
		console.log(error);
	  });
  });
//

//Inicio del servidor Express
app.listen(8080, () => {
	console.log("The server is now running on Port 8080");
});









