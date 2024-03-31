import express from "express";
import dotenv from "dotenv";
import Connection from "./src/db/mongodb.js";
import userRoutes from "./src/routes/userRoutes.js";

const app = express();
const Port = 8080;

dotenv.config();

app.use(express.json());

app.use("/", userRoutes);

app.get("/", (req, res) => res.send("Hello From Express"));
app.all("*", (req, res) => res.send("That route doesn't exist"));

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

Connection(username, password);

app.listen(Port, () =>
  console.log(`Server is listening on port: http://localhost:${Port}`)
);
