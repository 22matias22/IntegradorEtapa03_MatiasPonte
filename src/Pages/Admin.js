import React, { useState } from 'react';
import '../css/admin.css';

const Admin = () => {
  // Simulación de base de datos
  const emailDB = "admin@gmail.com";
  const passwordDB = "1234";

  // Estados para el email y password ingresados por el usuario
  const [emailUser, setEmailUser] = useState("");
  const [passwordUser, setPasswordUser] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Función para manejar el formulario de autenticación
  const handleLogin = (e) => {
    e.preventDefault();
    if (emailUser === emailDB && passwordUser === passwordDB) {
      setIsAuthenticated(true);
    } else {
      alert("Credenciales incorrectas. Redirigiendo a la página de inicio.");
      window.location.href = "/"; // Redirige a la página de inicio
    }
  };

  // Si el usuario no está autenticado, mostramos el formulario de inicio de sesión
  if (!isAuthenticated) {
    return (
      <div>
        <h1>Iniciar Sesión en Admin</h1>
        <form onSubmit={handleLogin}>
          <label>Email:</label>
          <input
            type="email"
            value={emailUser}
            onChange={(e) => setEmailUser(e.target.value)}
            required
          />
          <br />
          <label>Password:</label>
          <input
            type="password"
            value={passwordUser}
            onChange={(e) => setPasswordUser(e.target.value)}
            required
          />
          <br />
          <button type="submit">Iniciar Sesión</button>
        </form>
      </div>
    );
  }

  // Si el usuario está autenticado, mostramos el panel de administración
  return (
    <div>
      <main>
        <h1>Panel de Administración</h1>

        <section>
          <h2>Información Básica del Administrador</h2>
          <p><strong>Nombre:</strong> Administrador Principal</p>
          <p><strong>Email:</strong> {emailDB}</p>
          <p><strong>Último acceso:</strong> 15 de julio de 2024</p>
        </section>

        <section>
          <h2>Gestión de Productos</h2>
          <h2>Stock de Productos</h2>
          <table className="centered-table" border="1">
            <thead>
              <tr>
                <th>Producto</th>
                <th>Modelo</th>
                <th>Cantidad en Stock</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Celular</td>
                <td>iPhone 15</td>
                <td>20</td>
              </tr>
              <tr>
                <td>Celular</td>
                <td>iPhone 14</td>
                <td>25</td>
              </tr>
              <tr>
                <td>Celular</td>
                <td>iPhone 13</td>
                <td>7</td>
              </tr>
              <tr>
                <td>Celular</td>
                <td>iPhone 12</td>
                <td>25</td>
              </tr>
              <tr>
                <td>Celular</td>
                <td>iPhone SE</td>
                <td>18</td>
              </tr>
              <tr>
                <td>Smartwatch</td>
                <td>Apple Watch Series 8</td>
                <td>5</td>
              </tr>
              <tr>
                <td>Smartwatch</td>
                <td>Apple Watch Series 7</td>
                <td>11</td>
              </tr>
              <tr>
                <td>Smartwatch</td>
                <td>Apple Watch SE</td>
                <td>10</td>
              </tr>
              <tr>
                <td>AirPods</td>
                <td>AirPods Pro (2nd generation)</td>
                <td>10</td>
              </tr>
              <tr>
                <td>AirPods</td>
                <td>AirPods (3rd generation)</td>
                <td>20</td>
              </tr>
              <tr>
                <td>AirPods</td>
                <td>AirPods (2nd generation)</td>
                <td>1</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section>
          <h2>Gestión de Usuarios</h2>
          <p>Formularios enviados.</p>
        </section>
      </main>
    </div>
  );
};

export default Admin;
