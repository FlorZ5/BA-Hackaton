import React, { useState } from 'react';
import axios from 'axios';

const DeleteUser = () => {
    const [principal, setPrincipal] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post(`/api/delete_user_profile`, null, {
                params: { principal }
            });
            alert('Perfil de usuario eliminado exitosamente');
            setPrincipal('');
        } catch (error) {
            alert('Error al eliminar el perfil de usuario');
            console.error(error);
        }
    };

    return (
        <div>
            <h2>Eliminar Perfil de Usuario</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="principal" placeholder="Principal del usuario" value={principal} onChange={(e) => setPrincipal(e.target.value)} required />
                <button type="submit">Eliminar Usuario</button>
            </form>
        </div>
    );
};

export default DeleteUser;
