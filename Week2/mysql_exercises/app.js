const mysql = require("mysql");
const createDB = require("./createdb.js");
const { createTable } = require("./exercise1_keys.js");

async function mainFunction() {
   console.log("11111");
   await createDB();
   console.log("22222");

   await createTable();
   console.log("333");
}

mainFunction();
