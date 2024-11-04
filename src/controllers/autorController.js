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
  createAutor,
};
