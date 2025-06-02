import 'dotenv/config';

import { drizzle } from "drizzle-orm/mysql2";

import mysql from "mysql2/promise";
  
const poolConnection = mysql.createPool({
  host: "localhost",
  port: 3311,
  user: "user",
  password: "root",
  database: "blog",
});

const db = drizzle({ client: poolConnection });

// or if you need client connection
async function main() {
  const connection = await mysql.createConnection({
    host: "localhost",
    port: 3311,
    user: "user",
    password: "root",
    database: "blog",
  });
  const db = drizzle({ client: connection });
}

main();
