import "dotenv/config";
import { defineConfig } from "drizzle-kit";

export default defineConfig({
  out: "./src/db/drizzle/migrations",
  schema: "./src/db/drizzle/schema.ts",
  dialect: "mysql",
  dbCredentials: {
    host: "localhost",
    port: 3311,
    user: "user",
    password: "root",
    database: "blog",
  },
});
