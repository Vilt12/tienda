import { useState, useEffect } from "react";
import "./carrito.css";

//Iconos de FONTAWESOMEICON
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { faSquareMinus } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
//

import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";
import axios, { all } from "axios";

function Carrito({
  allProducts,
  setAllProducts,
  total,
  countProducts,
  setCountProducts,
  setTotal,
}) {

  const [preferenceId, setPreferenceId] = useState(null);
  const [animateIcon, setAnimateIcon] = useState(false);
  const [navbarOpen, setNavbarOpen] = useState(false); 
  const [loading, setLoading] = useState(false);
 initMercadoPago("APP_USR-9936f755-8524-42bb-9962-b65d7551d4e1");


  const toggleNavbar = () => {
    setNavbarOpen(!navbarOpen);
  };
  
  useEffect(() => {
    if (allProducts.length) {
      setNavbarOpen(true);
      setAnimateIcon(true);
    } else {
      setNavbarOpen(false);
      setAnimateIcon(false);
    }
  }, [allProducts]);
  /* _______________________________________________________________Eliminar Productos________________________________________________________________________________________________________________ */
  const onDeleteProduct = (product) => {
    const results = allProducts.filter(
      (item) => item.Nameproduct !== product.Nameproduct
    );

    setTotal(total - product.price * product.quantity);
    setCountProducts(countProducts - product.quantity);
    setAllProducts(results);
    actualizarPreferenceId();
    /* _______________________________________________________________Eliminar Productos________________________________________________________________________________________________________________ */
  };
  const vaciarCarrito=(product)=>{
       setAllProducts([]);
       setTotal(0);
       setCountProducts(0);
      actualizarPreferenceId();
  }
  const quitarunProducto=(product)=>{
    if(product.quantity>1){
      const existingProductIndex = allProducts.findIndex(
        (item) => item._id === product._id //busca un producto cuyo _id sea igual al _id del producto que se pasa como argumento.
      );
    
      if (product.quantity>1) {
        // El producto ya existe en el carrito, incrementa la cantidad
        const updatedProducts = [...allProducts]; //Se crea una copia de la lista de todos los productos en el carrito utilizando el operador spread ([...allProducts]). Esto se hace para evitar modificar directamente el estado original sin crear una nueva instancia.
        updatedProducts[existingProductIndex].quantity -= 1;
    
        setTotal(total - product.price);
        setCountProducts(countProducts - 1);
        setAllProducts(updatedProducts);
        actualizarPreferenceId();
      } 
    
    }else{

    }

  }
  const createPreference = async (products) => {
    try {
      const totalAmount = products.reduce(
        (total, product) => total + product.price * product.quantity,
        0
      );

      const response = await axios.post("https://mercadopago-wheat.vercel.app/create_preference", {
        items: products.map((product) => ({
          title: product.Nameproduct,
          unit_price: product.price,
          quantity: product.quantity,
        })),
        totalAmount: totalAmount,
      });

      const { id } = response.data;
      return id;
    } catch (error) {
      console.log(error);
    }
  }; 
  
  const handleBuy = async () => {

    setLoading(true);
    const id = await createPreference(allProducts);
    if (id) {
      setPreferenceId(id);
    
    }
   
    setLoading(false)
  };



  const actualizarPreferenceId = (id,product) => {
    // Lógica para obtener o actualizar preferenceId
  
    if (!allProducts.length) {
   
      setPreferenceId(null);
    } else {
  
     setPreferenceId(id)
    }
  };
  


  /* _______________________________________________________________________________________________________________________________________________________________________________________________    */
  return (
    <div className="App">
      <div className="boton-nav">
        <button
          id="toggleButton"
          className={navbarOpen ? "open" : ""}
          onClick={toggleNavbar}
        >
          <FontAwesomeIcon
            icon={faShoppingCart}
            style={{ color: "#000000" }}
            className={animateIcon ? "animate" : ""}
          ></FontAwesomeIcon>
        </button>
      </div>

      <nav className={`navbar ${navbarOpen ? "open" : ""}`}>
         <div className="box-total-product">
          <p>Productos totales: {countProducts}</p>
        </div>

        <div className="Box-total">
          <p>
            Total:
          </p> 
          <span>${total}</span>
        </div>  

        <button className="button-Vaciar" animateIcon="bounce"    style={{ color: "#ffffff" }} onClick={()=>vaciarCarrito()}>Vaciar carrito</button>

        {allProducts.length ? (
         
         <div className="box-carrito">
         
            {allProducts.map((product) => (
             
            <ul key={product.idProducto} className="carrito">
              <div className="box-carrito-imagen">
                  <li>
                  <img src={product.urlImage} height="80" width="80" alt="" />
                </li>
              </div>
                   <div className="box-quantity">
             <li>{product.quantity}</li>   
          </div>
                <div className="box-carrito-descripcion">
     
           
             <li>{product.Nameproduct}</li>
             </div>
               <div className="box-price">
               <li>${product.quantity*product.price}</li>
                              
               
               </div>
                <div className="box-buttons_carrito">

              
             
  <button className="button-quitarunProducto"  onClick={() => quitarunProducto(product)}><FontAwesomeIcon icon={faSquareMinus} /></button>
                
                 <button
                  className="button-delete"
                  onClick={() => onDeleteProduct(product)}
                >
                  <FontAwesomeIcon icon={faXmark}></FontAwesomeIcon>
                </button>
               </div>
              </ul>
            ))}
          </div>
        ) : (
       
      <p></p>
          
         
        )}
        <div className="Box-info-product">

         
  
      {preferenceId&&allProducts.length?(
     
        <div className="button-mercado">
               <button className="button-pay" onClick={handleBuy}>Actualizar link</button>
          <Wallet className="enlace-mercado" initialization={{ preferenceId }} />
        </div>
      ): allProducts.length?(
      <>
        <button className="button-pay" onClick={handleBuy}>Pagar</button>
      </>
        
      ):(
        <></>
      )}

      

      {loading ? (
        <div className="event-loading"><h4>Cargando...</h4></div>
        
      ) : (
        <p></p>
      )}   
      
         
            </div>
      </nav>
  
      <div className={`content ${navbarOpen ? "open" : ""}`}></div>
    </div>
  );
}

export default Carrito;
