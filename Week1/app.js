import express from "express";

import { createDB, createAndSeedTables333 } from "./db_utils/dbUtils.js";

const app = express();

const PORT = process.env.DBPORT || 3333;

app.get("/", (req, res) => {
   res.send(`Database handling app.`);
});

app.get("/createdb", createDB);
app.get("/createandseedtables", createAndSeedTables333);

app.listen(PORT, () => {
   console.log(`Listening on port: ${PORT}`);
});
