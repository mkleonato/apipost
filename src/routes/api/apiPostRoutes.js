const router = require("express").Router();
const {
  getAllPosts,
  getPostsByAutorId,
  
} = require("../../controllers/postController");

router.get("/", getAllPosts);
router.get("/autor/:autor_id", getPostsByAutorId);

//router.post("/", createPost);

module.exports = router;
