console.log("INICIANDO APP...");

const express = require("express"); // ← SIN espacio
const cors = require("cors");
const sequelize = require("./config/db");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", require("./routes/auth.routes"));
app.use("/api/clientes", require("./routes/cliente.routes"));

sequelize.sync()
  .then(() => {
    console.log("Base de datos conectada");

    app.listen(3000, () => {
      console.log("Servidor en puerto 3000");
    });
  })
  .catch((error) => {
    console.error("ERROR DE CONEXIÓN:", error);
  });