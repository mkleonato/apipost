const router = require("express").Router();

const {
  getAllAutores,
  getAutorById,
  createAutor,
} = require("../../controllers/autorController");

router.get("/", getAllAutores);
router.get("/:autorId", getAutorById);

router.post("/", createAutor);

module.exports = router;
