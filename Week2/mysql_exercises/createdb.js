const mysql = require("mysql");

const initialConfig = {
   host: "localhost",
   user: "hyfuser",
   password: "hyfpassword",
   // database: 'userdb',
};

const sqlCreateDB = `CREATE DATABASE IF NOT EXISTS userdb`;

const connection = mysql.createConnection(initialConfig);

const createDB = () => {
   return new Promise((reject, resolve) => {
      connection.query(sqlCreateDB, (error, result) => {
         if (error) reject(error);
         console.log(result);
         connection.end();
         resolve(result);
      });
   });
};

module.exports = createDB;
