const express = require("express");
const cors = require("cors");
const connect = require("./config/connection");
const route = require("./routers/routers");
const app = express();
app.use(express.json());
connect();
app.use(cors());
app.use("/",route);
const PORT = process.env.PORT || 3105;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
