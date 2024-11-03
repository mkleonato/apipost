const router = require("express").Router();
const {
  getAllPosts,
  getPostsByAutorId,
} = require("../../controllers/postController");

router.get("/", getAllPosts);
router.get("/:autorId", getPostsByAutorId);

module.exports = router;
