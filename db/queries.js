const pool = require("./pool");

async function getAllUsernames() {
  const { rows } = await pool.query("SELECT * FROM message_board");
  return rows;
}

async function insertUsername(info) {
  console.log("info", info.time);
  await pool.query(
    "INSERT INTO message_board (name,message,time) VALUES ($1,$2,$3) RETURNING *;",
    [info.name || " ", info.message || " ", info.time || " "],
  );
}

module.exports = {
  getAllUsernames,
  insertUsername,
};
