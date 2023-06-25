const mysql = require("mysql");
const { configWorldDb } = require("./dbConfig.js");

async function getPopulation(Country, name, code, cb) {
   const conn = mysql.createConnection(configWorldDb);

   await conn.query(
      `SELECT Population FROM ${Country} WHERE Name = '${name}' and code = '${code}'`,
      function (err, result) {
         if (err) {
            cb(err);
         }
         if (result.length == 0) {
            cb(new Error("Not found"));
         }
         conn.end();
         cb(null, result);
      }
   );
}

async function getPopulationInjectionProof(Country, name, code, cb) {
   const conn = mysql.createConnection(configWorldDb);

   const query = "SELECT Population FROM ?? WHERE Name = ? and code = ?";
   const params = [Country, name, code];

   await conn.query(query, params, function (err, result) {
      if (err) {
         cb(err);
         conn.end();
         process.exit(1);
      }
      if (result.length == 0) {
         cb(new Error("Not found"));
         conn.end();
         process.exit(1);
      }
      conn.end();
      cb(null, result);
   });
}

function myCallback(arg1, arg2) {
   console.log("arg1: ", arg1);
   console.log("arg2: ", arg2);
}

async function mainFunction() {
   await getPopulation(
      "country",
      "'; SELECT NULL, name, continent FROM country; --",
      "XYZ",
      myCallback
   );

   await getPopulationInjectionProof(
      "country",
      "'; SELECT NULL, name, continent FROM country; --",
      "XYZ",
      myCallback
   );
}

mainFunction();
