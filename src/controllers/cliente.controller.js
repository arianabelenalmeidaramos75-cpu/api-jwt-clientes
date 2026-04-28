const Cliente = require("../models/Cliente");

exports.getAll = async (req, res) => {
  const clientes = await Cliente.findAll();
  res.json(clientes);
};

exports.getById = async (req, res) => {
  const cliente = await Cliente.findByPk(req.params.id);
  res.json(cliente);
};

exports.create = async (req, res) => {
  const cliente = await Cliente.create(req.body);
  res.json(cliente);
};

exports.update = async (req, res) => {
  await Cliente.update(req.body, {
    where: { id: req.params.id },
  });

  res.json({ mensaje: "Cliente actualizado" });
};

exports.delete = async (req, res) => {
  await Cliente.destroy({
    where: { id: req.params.id },
  });

  res.json({ mensaje: "Cliente eliminado" });
};