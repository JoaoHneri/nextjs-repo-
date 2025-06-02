import "dotenv/config";
import { defineConfig } from "drizzle-kit";

export default defineConfig({
  out: "./src/drizzle/migrations",
  schema: "./src/db/schema.ts",
  dialect: "mysql",
  dbCredentials: {
    host: "localhost",
    port: 3311,
    user: "user",
    password: "root",
    database: "blog",
  },
});
