const express = require("express");

require("./db/conn");
const MensRnking = require("./moduls/mens");
const router = require("./routers/men")
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(router)

app.listen(port, () => {
  console.log(`Connection is live in http://localhost:${port}`);
});
