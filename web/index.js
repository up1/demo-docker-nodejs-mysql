const express = require("express"),
  path = require("path"),
  app = express(),
  mysql = require("mysql2"),
  cors = require("cors"),
  bodyParser = require("body-parser");

// routers
const usersRouter = require("./routes/users");

// make server object that contain port property and the value for our server.
var server = {
  port: 4040,
};

// setup database
db = mysql.createConnection({
  host: "db",
  user: "user",
  password: "password",
  database: "demodb",
});

// use the modules
app.use(cors());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

// use router
app.use("/users", usersRouter);
app.get("/", function (req, res) {
  res.sendFile(path.resolve(__dirname, "views") + "/input.html");
});

// starting the server
app.listen(server.port, () =>
  console.log(`Server started, listening port: ${server.port}`)
);
