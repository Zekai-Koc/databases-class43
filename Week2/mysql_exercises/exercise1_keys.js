const mysql = require("mysql");

const config = {
   host: "localhost",
   user: "hyfuser",
   password: "hyfpassword",
   database: "userdb",
};

const sqlCreateTable = `CREATE TABLE IF NOT EXISTS authors (
   author_id INT PRIMARY KEY,
   author_name VARCHAR(255),
   university VARCHAR(255),
   date_of_birth DATE,
   h_index INT,
   gender VARCHAR(255)
 );`;

const sqlCreateTablePlus = `CREATE TABLE IF NOT EXISTS authors (
  author_id INT PRIMARY KEY,
  author_name VARCHAR(255),
  university VARCHAR(255),
  date_of_birth DATE,
  h_index INT,
  gender VARCHAR(255),
  mentor INT,
  CONSTRAINT fk_mentor FOREIGN KEY (mentor) REFERENCES authors(author_id)
);`;

const sqlAddColumn = `ALTER TABLE authors
ADD COLUMN mentor INT,
ADD CONSTRAINT fk_mentor
FOREIGN KEY (mentor) REFERENCES authors(author_id);`;

const createTable = () => {
   const connection = mysql.createConnection(config);

   connection.query(sqlCreateTablePlus, (error, result) => {
      if (error) throw error;
      console.log(result);
      connection.end();
   });
};

// const alterTable = () => {
//    const connection = mysql.createConnection(config);

//    connection.query(sqlAddColumn, (error, result) => {
//       if (error) throw error;
//       console.log(result);
//       connection.end();
//    });
// };

module.exports = {
   createTable,
   // alterTable
};
