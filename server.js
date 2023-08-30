const express = require("express");
const app = express();
const cors = require("cors");
const mercadopago = require("mercadopago");

// REPLACE WITH YOUR ACCESS TOKEN AVAILABLE IN: https://developers.mercadopago.com/panel
mercadopago.configure({
	access_token: "APP_USR-2050192253529060-082910-7aca82a1134f8547b624bd3dfdcbf6d6-1463144691"
});


app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("../../client/html-js"));
app.use(cors());

app.get("/", function(req,res){
    res.send("Si funciona uwu")
})
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

app.listen(8080, () => {
	console.log("The server is now running on Port 8080");
});