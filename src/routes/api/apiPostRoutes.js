const router = require("express").Router();
const {
  getAllPosts,
  getPostsByAutorId,
  createPost,
} = require("../../controllers/postController");
const { checkAutorId } = require("../../utils/middleware");

router.get("/", getAllPosts);
router.get("/autor/:autor_id", checkAutorId, getPostsByAutorId);

router.post("/", createPost);

module.exports = router;
