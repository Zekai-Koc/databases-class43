const mysql = require("mysql");

const config = {
   host: "localhost",
   user: "hyfuser",
   password: "hyfpassword",
   database: "hyf_prep_exercise",
};

const createTable = (sql) => {
   try {
      const connection = mysql.createConnection(config);

      connection.query(sql, (error, result) => {
         if (error) throw error;
         console.log(result);
      });
   } catch (error) {
   } finally {
      connection.end();
   }
};

module.exports = {
   createTable,
   // alterTable
};
