const { selectPostsByAutorId } = require("../models/PostModel");

const checkAutorId = async (req, res, next) => {
  const { autor_id } = req.params;

  // Si el clienteId es un número
  if (isNaN(autor_id)) {
    return res.status(400).json({ message: "El id del autor es incorrecto" });
  }

  // Si el id del cliente existe en la BD
  const autor = await selectPostsByAutorId(autor_id);
  if (!autor) {
    return res
      .status(404)
      .json({ message: "El id del autor no existe en la BD" });
  }

  next();
};

module.exports = {
  checkAutorId,
};
