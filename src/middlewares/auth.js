const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  const header = req.headers["authorization"];

  if (!header) {
    return res.status(403).json({ mensaje: "Sin token" });
  }

  const token = header.split(" ")[1];

  try {
    const decoded = jwt.verify(token, "secreto");
    req.user = decoded;
    next();
  } catch {
    res.status(401).json({ mensaje: "Token inválido" });
  }
};