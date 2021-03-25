import { join } from "path";
import express from "express";
import socketIO from "socket.io";
import logger from "morgan";
import socketController from "./socketController";
import events from "./event";

const PORT = 4000;
const app = express();
app.set("view engine", "pug");
app.set("views", join(__dirname, "views"));
app.use(express.static(join(__dirname, "static")));
app.use(logger("dev"));
app.get("/",(req, res) => res.render("home", {events: JSON.stringify(events)}));

const handleListening = () =>
  console.log(`✔ Server running:http://localhost:${PORT}`);

const server = app.listen(PORT, handleListening);

const io =socketIO(server);
// 방금 접속한 socket이 자기를 제외한 나머지 클라이언트에게 hello라고 말함.
io.on("connection", socket => socketController(socket));
