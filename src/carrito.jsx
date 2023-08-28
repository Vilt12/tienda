import { useState,useEffect  } from "react";
import "./carrito.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
function Carrito({allProducts,
	setAllProducts,
	total,
	countProducts,
	setCountProducts,
	setTotal,}) {  
   
    const [animateIcon, setAnimateIcon] = useState(false);
    const [navbarOpen, setNavbarOpen] = useState(false);
   
    useEffect(() => {
      if (allProducts.length > 0) {
        setNavbarOpen(true);
        setAnimateIcon(true)
      }
      else{
        setNavbarOpen(false);
        setAnimateIcon(false)
      }
    }, [allProducts]);


 
    const toggleNavbar = () => {
      setNavbarOpen(!navbarOpen);
      
     console.log(allProducts); 
    };
   
      /* _______________________________________________________________Eliminar Productos________________________________________________________________________________________________________________ */
  const onDeleteProduct = product => {
		const results = allProducts&&allProducts.filter(
			item => item.id !== product.id
      
		);
 
		setTotal(total-product.price*product.quantity);
		setCountProducts(countProducts - product.quantity);
		setAllProducts(results);
    /* _______________________________________________________________Eliminar Productos________________________________________________________________________________________________________________ */
	};

    return (
    
    <div className="App">
      
        <div className="boton-nav">
          <button
            id="toggleButton"
            className={navbarOpen ? "open" : ""}
            onClick={toggleNavbar}
          >
   
<FontAwesomeIcon  icon={faShoppingCart}  style={{color: "#ffffff",}}   className={animateIcon ? "animate" : ""} ></FontAwesomeIcon>
          </button>  
        </div>
  
        <nav className={`navbar ${navbarOpen ? "open" : ""}`}>
      
           
          {allProducts.length ? (
            <div>   <div className="box-total-product"> 
         <p>Productos totales: {countProducts}</p>
              </div>  
              
              <div className="Box-total">
               <p>$Total <span>{total}</span></p>
            </div>
              {allProducts.map((product) => (
                <ul key={product.id} className="carrito">
                  <li>
                    <img src={product.urlImage} height="80" width="80" alt="" />
                  </li>
                  <li>{product.Nameproduct}</li>
                  <li>${product.price}</li>
                  <li>{product.quantity}</li>
             
                 <button className="button-delete" onClick={()=>onDeleteProduct(product)}> <FontAwesomeIcon icon={faTrashAlt}></FontAwesomeIcon></button>
                </ul>
              ))}
              
                
           
            </div>
          ) : (
            <p className="carrito">No hay productos</p>
          )}
        </nav>
  
        <div className={`content ${navbarOpen ? "open"  : ""}`}></div>
        
      </div>
    );
  }
 
  export default Carrito;
