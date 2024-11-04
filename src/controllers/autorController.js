const {
  selectAll,
  insertAutor,
  selectByAutorId,
} = require("../models/autorModel");

const getAllAutores = async (req, res, next) => {
  try {
    const [result] = await selectAll();
    res.json(result);
  } catch (error) {
    next(error);
  }
};

const getAutorById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const [result] = await selectByAutorId(id);

    res.json(result);
  } catch (error) {
    next(error);
  }
};

const createAutor = async (req, res, next) => {
  try {
    const [result] = await insertAutor(req.body);
    const autor = await selectByAutorId(result.insertId);
    res.json(autor);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllAutores,
  getAutorById,
  createAutor,
};
