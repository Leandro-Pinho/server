import express from "express";
import dotenv from "dotenv";
import Connection from "./src/db/mongodb.js";

const app = express();
const Port = 8080;

dotenv.config();

app.use(express.json());

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

Connection(username, password);

app.listen(Port, () =>
  console.log(`Server is listening on port: http://localhost:${Port}`)
);
