import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();
const port = 8000;

app.use(bodyParser.json());
app.use(cors());

app.get("/", (res, req) => res.send("Hello Node bihs"));
app.listen(port);