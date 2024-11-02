const { selectAll } = require("../models/autorModel");

const getAllAutores = async (req, res, next) => {
  try {
    const [result] = await selectAll();
    res.json(result);
  } catch (error) {
    next(error);
  }
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
