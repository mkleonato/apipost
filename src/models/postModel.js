// select * from post

const pool = require("../config/db");

function selectAllPosts() {
  return pool.query("select * from post;");
}

module.exports = {
  selectAllPosts,
};
