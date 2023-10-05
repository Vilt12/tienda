import { useState, useEffect } from "react";
import "./carrito.css";

//Iconos de FONTAWESOMEICON
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
//

import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";
import axios from "axios";

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
    if (allProducts.length > 0) {
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
    /* _______________________________________________________________Eliminar Productos________________________________________________________________________________________________________________ */
  };

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
                
             

                
                 <button
                  className="button-delete"
                  onClick={() => onDeleteProduct(product)}
                >
                  <FontAwesomeIcon icon={faTrashAlt}></FontAwesomeIcon>
                </button>

              </ul>
            ))}
          </div>
        ) : (
       
      <p></p>
          
         
        )}
        <div className="Box-info-product">

      
      {preferenceId?(
        <div className="button-mercado">
               <button className="button-pay" onClick={handleBuy}>Actualizar</button>
          <Wallet className="enlace-mercado" initialization={{ preferenceId }} />
        </div>
      ):(
        <button className="button-pay" onClick={handleBuy}>Pagar</button>
        
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
