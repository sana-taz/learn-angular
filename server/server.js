const express = require("express");
const routes = require("./routes");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
app.use(bodyParser.json());

app.use(cors());

app.get("/send", (req, res) => {
  res.send("ok");
});

app.get("/health", (req, res) => {
  res.status(200).send("OK");
});

if (require.main === module) {
  console.log("MAIN PRESENT");
  app.use("/api", routes);
  const port = process.env.PORT || 3200;
  console.log("port", port);
  app.listen(port, () => {
    console.log(`API server listening on port ${port}`);
  });
} else {
  app.use(routes);
}
