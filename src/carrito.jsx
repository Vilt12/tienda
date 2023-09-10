import { useState, useEffect } from "react";
import "./carrito.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
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
  initMercadoPago("APP_USR-9936f755-8524-42bb-9962-b65d7551d4e1");
  const [animateIcon, setAnimateIcon] = useState(false);
  const [navbarOpen, setNavbarOpen] = useState(false);

  useEffect(() => {
    if (allProducts.length > 0) {
      setNavbarOpen(true);
      setAnimateIcon(true);
    } else {
      setNavbarOpen(false);
      setAnimateIcon(false);
    }
  }, [allProducts]);

  const toggleNavbar = () => {
    setNavbarOpen(!navbarOpen);
  };

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

  const handleBuy = async () => {
    const id = await createPreference(allProducts);
    if (id) {
      setPreferenceId(id);
    }
  };

  const createPreference = async (products) => {
    try {
      const totalAmount = products.reduce(
        (total, product) => total + product.price * product.quantity,
        0
      );

      const response = await axios.post("http://localhost:8080/create_preference", {
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
            style={{ color: "#ffffff" }}
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
            Total: <span>${total}</span>
          </p>
        </div>
        {allProducts.length ? (
          <div className="box-carrito">
            <button className="button-pay" onClick={handleBuy}>Pagar</button>
            {preferenceId && <Wallet initialization={{ preferenceId }} />}
            {allProducts.map((product) => (
            
            <ul key={product.idProducto} className="carrito">
                <li>
                  <img src={product.urlImage} height="80" width="80" alt="" />
                </li>
                <li>{product.Nameproduct}</li>
                <li>${product.price}</li>
                <li>{product.quantity}</li>

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
       
             <p>No hay productos</p>
          
         
        )}
      </nav>

      <div className={`content ${navbarOpen ? "open" : ""}`}></div>
    </div>
  );
}

export default Carrito;
