import express from "express";
// import { createDB } from "./db_utils/createDB.js";
// import { connectDB } from "./db_utils/connectDB.js";
// import { createTableInvitee } from "./db_utils/createTableInvitee.js";
// import { createTableRoom } from "./db_utils/createTableRoom.js";
// import { createTableMeeting } from "./db_utils/createTableMeeting.js";
// import {
//    seedTableInvitee,
//    seedTableMeeting,
//    seedTableRoom,
// } from "./db_utils/seeder.js";

import { createDB, createAndSeedTables } from "./db_utils/dbUtils.js";

const app = express();

const PORT = process.env.DBPORT || 3333;

app.get("/", (req, res) => {
   res.send(`okkk. waiting...`);
});

app.get("/createdb", createDB);
app.get("/createandseedtables", createAndSeedTables);
// app.get("/seedtables", seedTables);
// app.get("/connectdb", connectDB);
// app.get("/createTableInvitee", createTableInvitee);
// app.get("/createTableRoom", createTableRoom);
// app.get("/createTableMeeting", createTableMeeting);
// app.get("/seedtableInvitee", seedTableInvitee);
// app.get("/seedTableMeeting", seedTableMeeting);
// app.get("/seedTableRoom", seedTableRoom);

app.listen(PORT, () => {
   console.log(`Listening on port: ${PORT}`);
});
