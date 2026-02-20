const { Client } = require("pg");

const SQL = `
CREATE TABLE IF NOT EXISTS message_board(
id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY, 
name VARCHAR(30), 
message VARCHAR(255), 
time VARCHAR(255));

INSERT INTO message_board (name,message,time) 
VALUES
  ('Bryan','Hello World', '17/02/2026 19:16 IST'),
  ('Odin','Hello Asgard', '17/02/2026 19:17 IST'),
  ('Thor','Hello Earth', '17/02/2026 19:18 IST');
`;

async function main() {
  console.log("seeding...");
  const client = new Client({
    connectionString:
      "postgresql://madhav-jariwala:Madhav@123@localhost:5432/mini_message_board",
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();
