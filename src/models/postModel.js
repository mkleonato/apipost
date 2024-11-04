// select * from post

const pool = require("../config/db");

function selectAllPosts() {
  return pool.query("select * from post;");
}

//select * from posts where autorId=2

function selectPostsByAutorId(autor_id) {
  return pool.query("select * from post.post where autor_id=?;", [autor_id]);
}

module.exports = {
  selectAllPosts,
  selectPostsByAutorId,
};
