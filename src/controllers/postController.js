const { selectAllPosts } = require("../models/postModel");

const getAllPosts = async (req, res, next) => {
  try {
    const [result] = await selectAllPosts();
    res.json(result);
  } catch (error) {
    next(error);
  }
};

const getPostsByAutorId = (req, res) => {
  res.json({
    message: "recupero todos los posts de un autor",
  });
};

module.exports = {
  getAllPosts,
  getPostsByAutorId,
};
