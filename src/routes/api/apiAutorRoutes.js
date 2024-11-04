const router = require("express").Router();

const {
  getAllAutores,
  createAutor,
} = require("../../controllers/autorController");

router.get("/", getAllAutores);

router.post("/", createAutor);

module.exports = router;
