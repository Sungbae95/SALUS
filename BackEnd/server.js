const http = require("http");
const dotenv = require("dotenv");
const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const routers = require("./routers");
const session = require("express-session");
const cors = require("cors");
const cookieParser = require('cookie-parser');

dotenv.config({ path: path.join(__dirname, "/.env") });
const webSocket = require("./socket/socket");

const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(
  session({ secret: "MySecret", resave: false, saveUninitialized: true })
);


app.use(cors({
  origin : true,
  credentials : true
}));
app.use(cookieParser());
app.use(routers);
app.use("/", require("./routers"));


const server = app.listen(3010, () => {
  console.log("Salus Server started 3010");
});
webSocket(server);


