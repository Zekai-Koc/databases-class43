const mysql = require("mysql");
const { initialConfig, config } = require("./dbConfig.js");

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

const createTable = (sql) => {
   return new Promise((resolve, reject) => {
      const connection = mysql.createConnection(config);
      try {
         connection.query(sql, (error, result) => {
            if (error)
               throw new Error(`Error creating table! ` + error.message);
            console.log(`Table: ${tableName(sql)}  is ready to use.`);
            resolve(result);
         });
      } catch (error) {
         reject(error);
      } finally {
         connection.end();
      }
   });
};

// OPTIONAL - Presumes that create table sql starts with: "CREATE TABLE IF NOT EXISTS ..."
function tableName(sql) {
   return sql.split(" ")[5];
}

const executeSQL = (sql) => {
   return new Promise((resolve, reject) => {
      const connection = mysql.createConnection(config);
      try {
         connection.query(sql, (error, result) => {
            if (error)
               throw new Error(
                  `Error executing SQL! \n ${sql} \n ` + error.message
               );
            console.log(
               `SQL: "${sql.slice(0, 50)}..." executed succesfully...`
            );
            // OPTIONAL - For a better view, comment out the following "console.log(result)" line
            console.log(result);
            resolve(result);
         });
      } catch (error) {
         reject(error);
      } finally {
         connection.end();
      }
   });
};

module.exports = { createDB, createTable, executeSQL };
