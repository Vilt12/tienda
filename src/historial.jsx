function historial(){

    async function obtenerHistorialVentas(accessToken) {
        try {
            const response = await axios.get('https://api.mercadopago.com/v1/payments/search', {
                headers: {
                    Authorization: `Bearer ${accessToken}`
                },
                params: {
                    // Puedes agregar filtros como fecha, estado, etc.
                    // Ejemplo: status: 'approved'
                }
            });
            const ventas = response.data.results;
            console.log('Historial de Ventas:', ventas);
            return ventas;
        } catch (error) {
            console.error('Error al obtener el historial de ventas:', error);
        }
    }



 return(
    
    <>
    <div>
     
    </div>
    
    </>
 )
}
export default  historial