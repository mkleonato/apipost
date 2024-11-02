const router = require("express").Router();

const {
  getAllAutores,
  getAutorById,
} = require("../../controllers/autorController");

router.get("/", getAllAutores);
router.get("/:autorId", getAutorById);

module.exports = router;
