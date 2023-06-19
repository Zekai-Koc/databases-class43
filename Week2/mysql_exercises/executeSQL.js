const mysql = require("mysql");
const { config } = require("./dbConfig.js");

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
            // For a better view, comment out the following "console.log(result)" line
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

module.exports = executeSQL;
