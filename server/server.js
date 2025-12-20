const express = require("express");
const app = express();

const routes = require("./routes");

const port = parseInt(process.env.PORT, Number) || 5000;

app.use(express.json({ limit: "50mb" }));
app.use("/", routes);

app.listen(port, () => {
  console.log(`Server running on ${port}`);
});
