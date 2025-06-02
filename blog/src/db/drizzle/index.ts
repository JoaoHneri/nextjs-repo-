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

// EXPORTAR a instância do banco
export const drizzleDb = drizzle({ client: poolConnection });

// Função para fechar conexões (opcional)
export const closeDatabase = async () => {
  await poolConnection.end();
};