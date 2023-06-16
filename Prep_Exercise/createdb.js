const mysql = require("mysql");

const initialConfig = {
   host: "localhost",
   user: "hyfuser",
   password: "hyfpassword",
   // database: 'userdb',
};

const sqlCreateDB = `CREATE DATABASE IF NOT EXISTS hyf_prep_exercise`;

const connection = mysql.createConnection(initialConfig);

const createDB = () => {
   return new Promise((resolve, reject) => {
      try {
         console.log("checking db...");
         connection.query(sqlCreateDB, (error, result) => {
            if (error) throw new Error("EEERRRROOOORRRR: ", error.message);
            console.log(`DB is ready for use.`);
            resolve(result);
         });
      } catch (error) {
         reject("..........rejecting from createDB function: ", error);
      } finally {
         connection.end();
      }
   });
};

module.exports = createDB;
