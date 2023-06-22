const mysql = require("mysql");

// Create a MySQL connection pool
const connectionMySql = mysql.createPool({
   host: "your_host",
   user: "your_username",
   password: "your_password",
   database: "your_database",
});

// Create the account table
const createTableAccount = () => {
   const sqlCreateTableAccount = `CREATE TABLE IF NOT EXISTS account (
      account_number INT AUTO_INCREMENT PRIMARY KEY, 
      balance float
      );`;

   connectionMySql.query(sqlCreateTableAccount, (error, results, fields) => {
      if (error) {
         console.error("Error creating account table:", error);
      } else {
         console.log("Account table created successfully.");
      }
   });
};

// Create the account_changes table
const createTableAccountChanges = () => {
   const sqlCreateTableAccountChanges = `CREATE TABLE account_changes (
      change_number INT AUTO_INCREMENT PRIMARY KEY,
      account_number int,
      amount float, 
      changed_date Date, 
      remark Text,
      FOREIGN key (account_number) REFERENCES account(account_number),
      );`;

   connectionMySql.query(
      sqlCreateTableAccountChanges,
      (error, results, fields) => {
         if (error) {
            console.error("Error creating account_changes table:", error);
         } else {
            console.log("Account_changes table created successfully.");
         }
      }
   );
};

createTableAccount();
createTableAccountChanges();
