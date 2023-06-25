const mysql = require("mysql");
// const { config } = require("./dbConfig.js");

const startConnection = (configDB) => {
   return new Promise((resolve, reject) => {
      try {
         const connection = mysql.createConnection(configDB);
         connection.connect();
         console.log(`Connection ready.`);
         resolve();
      } catch (error) {
         reject(error);
      }
   });
};

// const endConnection = (connection) => connection.end();

module.exports = { startConnection };
