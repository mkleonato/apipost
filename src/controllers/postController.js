const { selectAllPosts, selectPostsByAutorId } = require("../models/postModel");

const getAllPosts = async (req, res, next) => {
  try {
    const [result] = await selectAllPosts();
    res.json(result);
  } catch (error) {
    next(error);
  }
};

const getPostsByAutorId = async (req, res, next) => {
  const { autor_id } = req.params;
  try {
    const [result] = await selectPostsByAutorId(autor_id);

    res.json(result);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllPosts,
  getPostsByAutorId,
};
