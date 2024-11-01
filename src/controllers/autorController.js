const getAllAutores = (req, res) => {
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
