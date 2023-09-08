const mongoose = require("mongoose");
const password = "CounterStrike1.6";
const dbname = "Productos";
const uri = `mongodb+srv://Viltrax5:${password}@cafeteria.5wvw1pq.mongodb.net/Productos?retryWrites=true&w=majority`;


module.exports=mongoose


const { MongoClient, ServerApiVersion } = require('mongodb');

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Conexión exitosa a MongoDB Atlas");
  })
  .catch((error) => {
    console.error("Error al conectar a MongoDB Atlas:", error);
  });

