// select * form autor

const pool = require("../config/db");

function selectAll() {
  return pool.query("select * from autor;");
}

async function selectByAutorId(autor_id) {
  const [autores] = await pool.query("select * from autor where id=?", [
    autor_id,
  ]);

  if (autores.length === 0) {
    return null;
  }

  return autores[0];
}

function insertAutor({ nombre, email, imagen }) {
  return pool.query(
    "insert into autor (nombre, email, imagen) values (?,?,?)",
    [nombre, email, imagen]
  );
}

module.exports = {
  selectAll,
  selectByAutorId,
  insertAutor,
};
