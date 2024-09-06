import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Historial() {
    const [ventas, setVentas] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchHistorialVentas = async () => {
            try {
                const response = await axios.get('https://mercadopago-wheat.vercel.app/historial_ventas');
                setVentas(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Error al obtener el historial de ventas:', error);
                setError('Error al obtener el historial de ventas');
                setLoading(false);
            }
        };

        fetchHistorialVentas();
    }, []);

    if (loading) {
        return <div>Cargando...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div>
            <h1>Historial de Ventas</h1>
            {ventas.length === 0 ? (
                <p>No hay ventas disponibles</p>
            ) : (
                <ul>
                    {ventas.map(venta => (
                        <li key={venta.id}>
                            <p>ID: {venta.id}</p>
                            <p>Descripción: {venta.description}</p>
                            <p>Importe: {venta.transaction_amount} {venta.currency_id}</p>
                            <p>Fecha: {new Date(venta.date_approved).toLocaleDateString()}</p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default Historial;