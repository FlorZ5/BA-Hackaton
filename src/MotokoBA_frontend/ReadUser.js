import React, { useState } from 'react';
import axios from 'axios';

const ReadUser = () => {
    const [principal, setPrincipal] = useState('');
    const [user, setUser] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.get(`/api/read_user_profile?principal=${principal}`);
            setUser(response.data);
        } catch (error) {
            alert('Error al leer el perfil de usuario');
            console.error(error);
        }
    };

    return (
        <div>
            <h2>Leer Perfil de Usuario</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="principal" placeholder="Principal del usuario" value={principal} onChange={(e) => setPrincipal(e.target.value)} required />
                <button type="submit">Buscar Usuario</button>
            </form>
            {user && (
                <div>
                    <h3>Perfil de Usuario</h3>
                    <p>Nombre: {user.nombre}</p>
                    <p>Apellido: {user.apellido}</p>
                    <p>Dirección: {user.direccion}</p>
                    <p>Teléfono: {user.telefono}</p>
                    <p>Correo: {user.correo}</p>
                    <p>Usuario: {user.usuario}</p>
                    <p>Contraseña: {user.password}</p>
                </div>
            )}
        </div>
    );
};

export default ReadUser;
