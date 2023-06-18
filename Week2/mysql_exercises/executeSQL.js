const mysql = require("mysql");
const { config } = require("./dbConfig.js");

const executeSQL = (sql) => {
   return new Promise((resolve, reject) => {
      const connection = mysql.createConnection(config);
      try {
         connection.query(sql, (error, result) => {
            if (error) throw new Error(`Error executing SQL! ` + error.message);
            console.log(`SQL executed succesfully..`);
            // console.log(result);
            resolve(result);
         });
      } catch (error) {
         reject(error);
      } finally {
         connection.end();
      }
   });
};

module.exports = executeSQL;
