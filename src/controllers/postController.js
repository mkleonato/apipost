const getAllPosts = (req, res) => {
  res.json({
    message: "recupero todos los posts",
  });
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
