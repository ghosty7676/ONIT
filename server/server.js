import express from "express";
import router from "./routes/index.js";
import dotenv from "dotenv";
import { fileURLToPath } from "url";
import path from "path";

import redisClient from "./utils/redis.js";
import dbClient from "./utils/db.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({
  path: path.join(__dirname, ".env"),
});

console.log({
  DB_HOST: process.env.DB_HOST,
  DB_PORT: process.env.DB_PORT,
  DB_NAME: process.env.DB_NAME,
  DB_USER: process.env.DB_USER,
  DB_PASSWORD: process.env.DB_PASSWORD,
  types: {
    user: typeof process.env.DB_USER,
    password: typeof process.env.DB_PASSWORD,
  },
});

const app = express();

const port = parseInt(process.env.PORT, Number) || 5000;
// const res = await dbClient.query("SELECT NOW()");
// console.log(res.rows[0]);
app.use(express.json({ limit: "50mb" }));
app.use("/", router);

app.listen(port, () => {
  console.log(`Server running on ${port}`);
});
