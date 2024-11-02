// select * form autor

const pool = require("../config/db");

function selectAll() {
  return pool.query("select * from autor;");
}

module.exports = {
  selectAll,
};
