import express from "express";
import router from "./routes/index.js";

const app = express();

const port = parseInt(process.env.PORT, Number) || 5000;

app.use(express.json({ limit: "50mb" }));
app.use("/", router);

app.listen(port, () => {
  console.log(`Server running on ${port}`);
});
