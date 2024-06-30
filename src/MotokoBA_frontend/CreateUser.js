import React, { useState } from 'react';
import axios from 'axios';

const CreateUser = () => {
    const [user, setUser] = useState({
        nombre: '',
        apellido: '',
        direccion: '',
        telefono: '',
        correo: '',
        usuario: '',
        password: ''
    });

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('/api/create_user_profile', user);
            alert('Perfil de usuario creado exitosamente');
            setUser({
                nombre: '',
                apellido: '',
                direccion: '',
                telefono: '',
                correo: '',
                usuario: '',
                password: ''
            });
        } catch (error) {
            alert('Error al crear el perfil de usuario');
            console.error(error);
        }
    };

    return (
        <div>
            <h2>Crear Nuevo Usuario</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="nombre" placeholder="Nombre" value={user.nombre} onChange={handleChange} required />
                <input type="text" name="apellido" placeholder="Apellido" value={user.apellido} onChange={handleChange} required />
                <input type="text" name="direccion" placeholder="Dirección" value={user.direccion} onChange={handleChange} required />
                <input type="text" name="telefono" placeholder="Teléfono" value={user.telefono} onChange={handleChange} required />
                <input type="email" name="correo" placeholder="Correo" value={user.correo} onChange={handleChange} required />
                <input type="text" name="usuario" placeholder="Usuario" value={user.usuario} onChange={handleChange} required />
                <input type="password" name="password" placeholder="Contraseña" value={user.password} onChange={handleChange} required />
                <button type="submit">Crear Usuario</button>
            </form>
        </div>
    );
};

export default CreateUser;
