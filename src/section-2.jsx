import React from 'react';
import "./section-2.css"
import Navbar from "./nav-bar";

function Section2() {
    return(

        <div className='Superbox-section-2'>
      <div className="section__2-box-1">
        
        <div className="section__2-box-titulo-1">
            <h4>Nuestro local</h4>
            <div className="section__2-box-parrafo-1">
                <p>Adéntrate en nuestro paraíso del café, donde cada taza es una sinfonía de sabores y cada rincón exuda calidez. En nuestro acogedor y encantador espacio, la pasión por el café se fusiona con la excelencia en cada detalle. Disfruta de deliciosos brebajes artesanales y exquisitos postres mientras te sumerges en un ambiente relajado y amigable. Nuestro equipo dedicado te recibirá con una sonrisa, siempre listo para ofrecerte una experiencia única y memorables momentos de café.</p>
            
            </div>
            <div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d18917.968189562314!2d-69.236878497298!3d45.18359824813812!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cb0225bd44bd137%3A0xa3e3c077da62cd2b!2sDover-Foxcroft%2C%20Maine%2004426%2C%20EE.%20UU.!5e0!3m2!1ses-419!2sar!4v1694474585320!5m2!1ses-419!2sar" width="600" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
        
      </div>
      <div className="section__2-box">
        
        <div className="section__2-box-titulo">
            <h4>Nuestros productos</h4>
            <div className="section__2-box-parrafo">
                <p>Nuestros cafés, cuidadosamente seleccionados de las mejores cosechas alrededor del mundo, son el resultado de una pasión inquebrantable por la perfección. Cada taza se convierte en un viaje de aromas y sabores, desde el primer sorbo hasta el último, transportándote a lugares remotos con cada nota y creando un deleite para tus sentidos. Ven y descubre una experiencia única en cada variedad, preparada con amor y maestría, que te invitará a volver una y otra vez.</p>
         
            </div>
            <div className='section__2-box-product'>
           <div>
            <div className='box-product-sub'>
                <p>Facturas</p>
            </div>
                  <img src="https://platosargentinos.com/wp-content/uploads/2022/09/Receta-de-medialunas-caseras-de-manteca-argentinas.png" alt="" />
           </div>

           <div>
            <div className='box-product-sub'>
                <p>Cafes</p>
            </div>
            <img src="https://www.nestleprofessional.es/sites/default/files/styles/np_recipe_detail/public/2022-04/latte-macchiato-adapt2.png?itok=Yb-9zCKQ" alt="" />
           </div>

              <div>
            <div className='box-product-sub'>
                <p>Helados</p>
            </div>
            <img src="https://everydaynature.com.ar/wp-content/uploads/pngegg-3.png" alt="" />
           </div>
              
              
           <div>
            <div className='box-product-sub'>
                <p>Sanguches</p>
            </div>
            <img src="https://www.juliana-delivery.com.ar/uploads/products/detail_products_7576.png" alt="" />
           </div>
              
           <div>
            <div className='box-product-sub'>
                <p>Limonadas</p>
            </div>
            <img src="https://tamaleradejesus.com/wp-content/uploads/2021/09/26-768x512.png" alt="" />
           </div>
            
           <div>
            <div className='box-product-sub'>
                <p>Alfajores</p>
            </div>
            <img src="https://www.havanna.com.ar/data/upload/producto_galeria/340df6d3ef5e5d5e416c9d5df2e3b5d4.png" alt="" />
           </div>
            
        
              
           
             
             
         </div>
     
        </div>
       
      </div>
     
        </div>
       
    )
}
export default Section2;