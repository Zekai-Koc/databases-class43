const mysql = require("mysql");
const { config } = require("./dbConfig.js");

const doTransaction = (sqlList) => {
   return new Promise(async (resolve, reject) => {
      const connection = mysql.createConnection(config);
      try {
         connection.beginTransaction((error) => {
            if (error) {
               connection.end();
               console.log("Error starting transaction!");
               throw error;
            }
         });

         for (let i = 0; i < sqlList.length; i++) {
            connection.query(sqlList[i], (error, result) => {
               if (error) {
                  connection.end();
                  console.log("Error executing transaction sql!");
                  throw error;
               }
            });
         }
         connection.commit();
         console.log("Transaction completed.");
         resolve(`Transaction completed.`);
      } catch (error) {
         console.log("Error executing transaction! Rolling back...");
         connection.rollback();
         reject("Error executing transaction! Rolling back...", error);
      } finally {
         connection.end();
         console.log("Connection ended.");
      }
   });
};

module.exports = { doTransaction };
