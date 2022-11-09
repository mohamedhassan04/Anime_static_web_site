console.clear();
const express = require("express");
const DBconnect = require("./config/DBconnect");
const app = express();

const port = process.env.PORT || 5000;

require("dotenv").config();

DBconnect();
app.use(express.json());

const user = require("./routes/userRoute");

app.use("/api/v1", user);

app.listen(port, () => console.log(`server is running in port ${port}`));
