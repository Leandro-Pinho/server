import express from "express";

const app = express();
const Port = 8080;

app.use(express.json());

app.listen(Port, () =>
  console.log(`Server is listening on port: http://localhost:${Port}`)
);
