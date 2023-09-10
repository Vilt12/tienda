/* import { useEffect } from "react";




useEffect(() => {
    // Realiza la solicitud para obtener los productos desde tu base de datos
    async function obtenerProductos() {
      try {
        const response = await fetch('/api/productos/productos');
        const data = await response.json();
        setProductos(data);
      } catch (error) {
        console.error('Error al obtener productos:', error);
      }
    }
 
    obtenerProductos();
  }, []); */
export const data= [
   
    {
        id:1,
        Nameproduct:"Espresso",
        price:500,
        urlImage:"https://www.lalicantina.com/wp-content/uploads/2020/11/Tacita-de-cafe-vidrio-sin-fondo.png",
        quantity:1,
        description:"Intenso y concentrado, con una capa dorada de crema en la parte superior. Sabor audaz y equilibrado entre notas amargas y dulces."
        },
        {
            id:2,
            Nameproduct:"Cappuccino",
            price:700,
            urlImage:"https://djftrby1k8irl.cloudfront.net/s3fs-public/2022-03%2FCappuccino%20425x425%20sin%20fondo.png?auto=format,compress&q=70&crop=focalpoint&ar=1:1.0&w=180&fit=crop",
            quantity:1,
            description:"Espresso combinado con leche al vapor y espuma. Experiencia equilibrada y cremosa con una presentación decorativa."
            },
            {
                id:3,
                Nameproduct:"Cold Brew",
                price:550,
                urlImage:" https://djftrby1k8irl.cloudfront.net/s3fs-public/2022-03%2FCold%20Brew%20Cold%20Foam%20425x425%20sin%20fondo.png?auto=format,compress&q=70&crop=focalpoint&ar=1:1.0&w=180&fit=crop",
                quantity:1,
                description:"Bebida refrescante y menos ácida que el café caliente. Sabor suave y dulce, ideal con hielo y opciones de personalización."
                },
                {
                    id:4,
                    Nameproduct:"Mocha",
                    price:750,
                    urlImage:"https://www.starbucksathome.com/es/sites/default/files/styles/overview_banner_image/public/2021-06/10032021_CafeMocha_CS-min_0.png?h=07cea122&itok=v5H4r_wG",
                    quantity:1,
                    description:"Espresso con leche al vapor y chocolate. Deliciosa mezcla de sabores de café y chocolate, con opción de crema batida y chocolate rallado."
                    },
                
]