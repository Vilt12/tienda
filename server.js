//Configuracion de servidor Express uwu
const express = require("express");
const app = express();
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







//Obtener Historial de transacciones de mercado pago 
const axios = require("axios");

// Tu access token de Mercado Pago
const accessToken = "APP_USR-2050192253529060-082910-7aca82a1134f8547b624bd3dfdcbf6d6-1463144691";

// Configura la URL base de la API de Mercado Pago
const mercadoPagoAPI = axios.create({
  baseURL: "https://api.mercadopago.com/v1",
  headers: {
    Authorization: `Bearer ${accessToken}`,
  },
});

// Ejemplo: Obtener historial de transacciones
 async function obtenerHistorialDeTransacciones() {
  try {
    // Realiza una solicitud GET para obtener las transacciones
    const response = await mercadoPagoAPI.get("/payments/search");

    // Procesa la respuesta
    const transacciones = response.data.results;
  console.log(transacciones);
  
    let description = "";
    // Itera sobre las transacciones y obtén información adicional
    transacciones.forEach((transaccion) => {
      const cantidadDinero = transaccion.transaction_amount;
      const GmailUsuario = transaccion.payer.email;
	  const primerNombre= transaccion.payer.first_name;
	  const Apellido= transaccion.payer.last_name;
	  const productosComprados = transaccion.description;
      // Hacer algo con los datos, como mostrarlos o almacenarlos
	  description += `Nombre: ${primerNombre}\nApellido: ${Apellido}\nGmail: ${GmailUsuario}\nCantidad de dinero: ${cantidadDinero}\nProductos: ${productosComprados}\n\n`;
    });
	console.log(description);
  } catch (error) {
    console.error("Error al obtener el historial de transacciones:", error);
  }
}

// Llama a la función para obtener el historial de transacciones
 obtenerHistorialDeTransacciones();