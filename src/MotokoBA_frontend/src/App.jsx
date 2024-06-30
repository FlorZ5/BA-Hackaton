import React, { useState } from 'react';
import axios from 'axios'; // Importamos axios para hacer peticiones HTTP

function App() {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [telefono, setTelefono] = useState('');
  const [correo, setCorreo] = useState('');
  const [direccion, setDireccion] = useState('');
  const [usuario, setUsuario] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [mensaje, setMensaje] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Validación básica de campos
    if (!nombre || !apellido || !telefono || !correo || !direccion || !usuario || !contrasena) {
      setMensaje('Todos los campos son obligatorios');
      return;
    }

    // Objeto con los datos del cliente
    const cliente = {
      nombre,
      apellido,
      telefono,
      correo,
      direccion,
      usuario,
      contrasena
    };

    try {
      // Enviar los datos al backend (Motoko) usando axios o fetch
      const response = await axios.post('http://localhost:8000/register', cliente);
      console.log(response.data); // Mensaje de éxito desde el backend
      setMensaje(response.data); // Actualizar mensaje de éxito
    } catch (error) {
      console.error('Error al registrar el cliente:', error);
      setMensaje('Error al registrar el cliente. Por favor, inténtalo de nuevo.'); // Mensaje de error
    }
  };

  return (
    <div className="App">
      <h2>Formulario de Registro de Cliente</h2>
      <form onSubmit={handleSubmit}>
        <label>Nombre:</label>
        <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} required />
        <br />

        <label>Apellido:</label>
        <input type="text" value={apellido} onChange={(e) => setApellido(e.target.value)} required />
        <br />

        <label>Teléfono:</label>
        <input type="text" value={telefono} onChange={(e) => setTelefono(e.target.value)} required />
        <br />

        <label>Correo:</label>
        <input type="email" value={correo} onChange={(e) => setCorreo(e.target.value)} required />
        <br />

        <label>Dirección:</label>
        <input type="text" value={direccion} onChange={(e) => setDireccion(e.target.value)} required />
        <br />

        <label>Usuario:</label>
        <input type="text" value={usuario} onChange={(e) => setUsuario(e.target.value)} required />
        <br />

        <label>Contraseña:</label>
        <input type="password" value={contrasena} onChange={(e) => setContrasena(e.target.value)} required />
        <br />

        <button type="submit">Registrarse</button>
      </form>
      {mensaje && <p>{mensaje}</p>}
    </div>
  );
}

export default App;
