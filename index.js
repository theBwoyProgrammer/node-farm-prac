import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();
const port = 8000;

app.use(bodyParser.json());
app.use(cors());

app.get("/", (req, res) => res.send("Hello Node bihs"));
app.listen(port, () => console.log(`Server is listening on port: http://localhost ${port}`) );