const mysql = require("mysql");
const { config } = require("./dbConfig.js");

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

module.exports = createTable;
