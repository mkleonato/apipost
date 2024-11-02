const { selectAll } = require("../models/autorModel");

const getAllAutores = async (req, res) => {
  const result = await selectAll();
  console.log(result);
  res.json({
    message: "recupero todos los autores",
  });
};

const getAutorById = (req, res) => {
  res.json({
    message: "recupero un autor por Id",
  });
};

module.exports = {
  getAllAutores,
  getAutorById,
};
