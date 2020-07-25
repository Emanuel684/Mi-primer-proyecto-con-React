import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Integrantes del PPI</h1>
      <h2>BARPPI</h2>
      <br></br>
      <table>
        <tr>
          <td><strong>Nombre</strong></td>
          <td><strong>Apellidos</strong></td>
          <td><strong>Correo</strong></td>
          <td><strong>Celular</strong></td>
        </tr>
        <tr>
          <td>Emanuel</td>
          <td>Acevedo Muñoz</td>
          <td>emanuelacag@gmail.com</td>
          <td>318 7604393</td>
        </tr>
        <tr>
        <td>Juan Jose</td>
          <td>Posada Garcia</td>
          <td>jjposadagarcia@gmail.com</td>
          <td>301 5365876</td>
        </tr>
        <tr>
        <td>Bryant</td>
          <td>Rivas Barrientos</td>
          <td>bryantrivas18@gmail.com</td>
          <td>313 8872348</td>
        </tr>
        <tr>
        <td>Marlon Andrés</td>
          <td>Velásquez Castro</td>
          <td>andres311002@gmail.com</td>
          <td>300 3520852</td>
        </tr>
      </table>
    </div>
  );
}

export default App;
