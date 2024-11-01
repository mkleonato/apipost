const router = require("express").Router();

router.use("/posts", require("./api/apiPostRoutes"));
router.use("/autores", require("./api/apiAutorRoutes"));

module.exports = router;
