const {
  selectAllPosts,
  selectPostsByAutorId,
  selectByPostId,
  insertPost,
} = require("../models/postModel");

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

const createPost = async (req, res, next) => {
  try {
    const [result] = await insertPost(req.body);
    const post = await selectByPostId(result.insertId);
    res.json(post);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllPosts,
  getPostsByAutorId,
  createPost,
};
