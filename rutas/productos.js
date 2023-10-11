//Importacion de modulos necesarios para crear rutas y iniciar la aplicacion
//"mongoose" nos ayudara a interactuar con la base de datos MongoDB
//Definimos un esquema de mongoose"eschema" para los productos
const express=require("express")
const router=express.Router()
const mongoose=require("mongoose")
const eschema=mongoose.Schema
//

//Definimos el esquema ("eschemaProducto") para los productos que incluyen varios campos lo cuales podemos apreciar
const eschemaProducto=new eschema({
  
  Nameproduct:String,
    price:Number,
    description:String,
    quantity:Number,
    urlImage:String,
    categories:String 
   

})
//

//Creacion de un modelo mongoose "ModeloProducto" basado en el esquema "eschemaProducto"
//Este modelo lo utilizaremos para realizar operaciones CRUD en la coleccion de productos en la base de datos
const ModeloProducto=mongoose.model("Producto",eschemaProducto)
//

//Agregar Prodcuto
//Define una ruta POST ("/agregarProducto") que maneja la creación de un nuevo producto en la base de datos.

router.post("/agregarProducto", async (req, res) => {
    try {
      // Obténer los datos del producto desde el cuerpo de la solicitud (req.body)
      const { Nameproduct, price, description,quantity,urlImage,categories } = req.body;
 
     
     //Crea un nuevo documento utilizando el modelo ModeloProducto y lo guarda en la base de datos.
      const nuevoProducto = new ModeloProducto({
        Nameproduct,
        price,
        description,
        quantity,
        urlImage,
        categories
      });
  
      // Guarda el nuevo producto en la base de datos
      await nuevoProducto.save();
  //Envía una respuesta JSON indicando el éxito o el error.
      res.status(200).json({ mensaje: "Producto agregado con éxito" });
    } catch (error) {
      console.error("Error al agregar el producto:", error);
      res.status(500).json({ error: "Ocurrió un error al agregar el producto" });
    }
  });
//



 
//Obtener Productos
//Define una ruta GET ("/productos") que se utiliza para obtener la lista de todos los productos en la base de datos.
  router.get("/productos", async (req, res) => {
    try {
      // Obtiene la lista de productos desde la base de datos
      const productos = await ModeloProducto.find();
      res.status(200).json(productos); // Envía la lista como respuesta
    } catch (error) {
      console.error("Error al obtener la lista de productos:", error);
      res.status(500).json({ error: "Ocurrió un error al obtener la lista de productos" });
    }
  });
//

//Define una ruta DELETE ("/productos/:id") que se utiliza para eliminar un producto específico según su ID.


//Eliminar Productos
router.delete("/productos/:id", async (req, res) => {
 
  //Extrae el ID del producto de los parámetros de la URL. 
   const productId = req.params.id;
  
   try {
    
//Utiliza el modelo ModeloProducto para buscar y eliminar el producto por su ID y envía una respuesta JSON indicando el éxito o el error.
      // Busca y elimina el producto por su ID
      await ModeloProducto.findByIdAndRemove(productId);
      res.status(200).json({ mensaje: "Producto eliminado exitosamente" });
    } catch (error) {
      console.error("Error al eliminar el producto:", error);
      res.status(500).json({ error: "Ocurrió un error al eliminar el producto" });
    }
  });
  //



 

//Define una ruta PUT ("/productos/:id") que se utiliza para actualizar un producto específico según su ID.
//Actualizar productos
  router.put("/productos/:id", async (req, res) => {
  
    //Extrae el ID del producto de los parámetros de la URL. 
   const productId = req.params.id;
   
   //Obtiene los nuevos datos del producto desde el cuerpo de la solicitud 
    const { Nameproduct, price, description, quantity, urlImage, categories } = req.body;
  
    try 
    {//utiliza el modelo ModeloProducto para buscar el producto por su ID y actualizarlo.
      // Busca el producto por su ID y actualiza los campos con los nuevos valores
      const productoActualizado = await ModeloProducto.findByIdAndUpdate(
        productId,
        {
          Nameproduct,
          price,
          description,
          quantity,
          urlImage,
          categories
        },
        { new: true } // Esto devuelve el producto actualizado en lugar del producto antiguo
      );
  //Envía una respuesta JSON indicando el éxito o el error y devuelve el producto actualizado.
      if (!productoActualizado) {
        return res.status(404).json({ error: "Producto no encontrado" });
      }
  
      res.status(200).json({ mensaje: "Producto actualizado con éxito" });
    } catch (error) {
      console.error("Error al actualizar el producto:", error);
      res.status(500).json({ error: "Ocurrió un error al actualizar el producto" });
    }
  });
  //
module.exports=router


