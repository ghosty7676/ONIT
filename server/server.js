import "./config/env.js";

import express from "express";
import router from "./routes/index.js";
import redisClient from "./utils/redis.js";
import dbClient from "./utils/db.js";

console.log("ENV LOADED:", process.env.DB_USER);

const app = express();

const port = parseInt(process.env.PORT, Number) || 5000;
app.use(express.json({ limit: "50mb" }));
app.use("/", router);

app.listen(port, () => {
  console.log(`Server running on ${port}`);
});
