const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const helmet = require("helmet");
const multer = require("multer");
const gorurHatDB = require("./dbs/goruhatDB");
const userRoutes = require("./Routes/userRoutes");
const goruRoutes = require("./Routes/goruRoutes");

const app = express();
const port = 3004;

//db connection
gorurHatDB();
//middleware
app.use(morgan("common"));
app.use(helmet());
app.use(cors());
app.use(express.json({ limit: "10mb", extended: true }));
app.use(
  express.urlencoded({ limit: "10mb", extended: true, parameterLimit: 1000000 })
);

//routes
app.get("/", (req, res) => res.send("GORU API"));
app.use("/users", userRoutes);
app.use("/gorus", goruRoutes);

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
