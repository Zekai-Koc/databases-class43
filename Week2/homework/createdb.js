const mysql = require("mysql");
const { initialConfig } = require("./dbConfig.js");

const createDB = (dbName) => {
   const sqlCreateDB = `CREATE DATABASE IF NOT EXISTS ${dbName}`;

   return new Promise((resolve, reject) => {
      const connection = mysql.createConnection(initialConfig);
      try {
         console.log("Checking/creating db...");
         connection.query(sqlCreateDB, (error, result) => {
            if (error)
               throw new Error(`Error creating DB: ${dbName} ` + error.message);
            console.log(`DB: ${dbName} is ready to use.`);
            resolve(result);
         });
      } catch (error) {
         reject(error);
      } finally {
         connection.end();
      }
   });
};

module.exports = createDB;
