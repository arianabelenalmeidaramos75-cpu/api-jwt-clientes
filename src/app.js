console.log("INICIANDO APP...");

const express = require("express"); // ← SIN espacio
const cors = require("cors");
const sequelize = require("./config/db");

const app = express();

app.get("/", (req, res) => {
  res.send(`
    <html>
    <head>
      <title>API Clientes JWT</title>
      <style>
        body {
          margin: 0;
          font-family: Arial, sans-serif;
          background: linear-gradient(135deg, #667eea, #764ba2);
          color: white;
          text-align: center;
          padding: 80px;
        }
        .card {
          background: white;
          color: #333;
          padding: 30px;
          border-radius: 20px;
          max-width: 600px;
          margin: auto;
          box-shadow: 0 10px 25px rgba(0,0,0,0.3);
        }
        h1 {
          color: #4c51bf;
        }
        .ok {
          background: #22c55e;
          color: white;
          padding: 10px 20px;
          border-radius: 10px;
          display: inline-block;
          margin-top: 10px;
        }
        ul {
          text-align: left;
          line-height: 1.8;
        }
      </style>
    </head>
    <body>
      <div class="card">
        <h1>API REST CRUD con JWT</h1>
        <p class="ok">Servidor funcionando correctamente</p>
        <h3>Funcionalidades:</h3>
        <ul>
          <li>Registro de usuario</li>
          <li>Login con JWT</li>
          <li>Token de autenticación</li>
          <li>Ruta protegida para clientes</li>
          <li>Conexión con MySQL usando Sequelize</li>
        </ul>
      </div>
    </body>
    </html>
  `);
});