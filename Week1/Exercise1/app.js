import express from "express";

import { createDB, createAndSeedTables } from "./db_utils/dbUtils.js";

const app = express();

const port = process.env.APIPORT || 3333;

app.get("/createdb", createDB);
app.get("/createandseedtables", createAndSeedTables);

app.listen(port, () => {
   console.log(`Listening on port: ${port}`);
});
