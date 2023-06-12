const mysql = require("mysql");
const sqlStatements = require("./sqls.js");

const config = {
   user: "root",
   password: "3570",
   server: "localhost",
   database: "world",
};

const db = mysql.createConnection(config);

sqlStatements.forEach((sqlStatement) => {
   db.query(sqlStatement, (err, result) => {
      if (err) {
         console.log(`Error in forEach: ${err}`);
         return;
      }
      const tempObj = {
         question: sqlStatement.question,
         sql: sqlStatement.sql,
         result,
      };
      console.log(tempObj);
   });
   return;
});
