const express=require("express")
const router=express.Router()

const mongoose=require("mongoose")
const eschema=mongoose.Schema

const eschemaProducto=new eschema({
  
  Nameproduct:String,
    price:Number,
    description:String,
    quantity:Number,
    urlImage:String,
    categories:String    

})

const ModeloProducto=mongoose.model("Producto",eschemaProducto)



router.post("/agregarProducto", async (req, res) => {
    try {
      // Obténer los datos del producto desde el cuerpo de la solicitud (req.body)
      const { Nameproduct, price, description,quantity,urlImage,categories } = req.body;
  
      // Crea un nuevo documento utilizando el modelo
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
  
      res.status(201).json({ mensaje: "Producto agregado con éxito" });
    } catch (error) {
      console.error("Error al agregar el producto:", error);
      res.status(500).json({ error: "Ocurrió un error al agregar el producto" });
    }
  });

  //Obtener Productos
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
//Eliminar Productos
router.delete("/productos/:id", async (req, res) => {
    const productId = req.params.id;
    try {
      // Busca y elimina el producto por su ID
      await ModeloProducto.findByIdAndRemove(productId);
      res.status(200).json({ mensaje: "Producto eliminado exitosamente" });
    } catch (error) {
      console.error("Error al eliminar el producto:", error);
      res.status(500).json({ error: "Ocurrió un error al eliminar el producto" });
    }
  });
//Actualizar productos
  router.put("/productos/:id", async (req, res) => {
    const productId = req.params.id;
    const { Nameproduct, price, description, quantity, urlImage, categories } = req.body;
  
    try {
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
  
      if (!productoActualizado) {
        return res.status(404).json({ error: "Producto no encontrado" });
      }
  
      res.status(200).json({ mensaje: "Producto actualizado con éxito" });
    } catch (error) {
      console.error("Error al actualizar el producto:", error);
      res.status(500).json({ error: "Ocurrió un error al actualizar el producto" });
    }
  });
module.exports=router



/* Ruta de prueba
router.get("/ejemplo", (req,res)=>{
    res.end("Saludo compatriotas capitalistas ")
}) */
