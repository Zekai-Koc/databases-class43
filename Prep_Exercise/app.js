const createDB = require("./createdb.js");

async function createEnv() {
   await createDB();
}

createEnv();
