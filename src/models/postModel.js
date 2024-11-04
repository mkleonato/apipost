// select * from post

const pool = require("../config/db");

function selectAllPosts() {
  return pool.query("select * from post;");
}

//select * from posts where autorId=2

function selectPostsByAutorId(autor_id) {
  return pool.query("select * from post.post where autor_id=?;", [autor_id]);
}

async function selectByPostId(post_id) {
  const [posts] = await pool.query("select * from post where id=?", [post_id]);

  if (posts.length === 0) {
    return null;
  }

  return posts[0];
}

function insertPost({
  descripcion,
  fecha_creacion,
  categoria,
  post,
  autor_id,
}) {
  return pool.query(
    "insert into post (descripcion, fecha_creacion, categoria, post, autor_id) values (?,?,?,?,?)",
    [descripcion, fecha_creacion, categoria, post, autor_id]
  );
}

module.exports = {
  selectAllPosts,
  selectPostsByAutorId,
  selectByPostId,
  insertPost,
};
