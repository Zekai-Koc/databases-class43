/* Please execute app.js for creating the following tables. */

const sqlCreateTableAccount = `CREATE TABLE IF NOT EXISTS account (
   account_number INT PRIMARY KEY, 
   balance float
   );`;

const sqlCreateTableAccountChanges = `CREATE TABLE IF NOT EXISTS account_changes (
   change_number INT AUTO_INCREMENT PRIMARY KEY,
   account_number int,
   amount float, 
   changed_date Date, 
   remark Text,
   FOREIGN key (account_number) REFERENCES account(account_number)
   );`;

module.exports = {
   sqlCreateTableAccount,
   sqlCreateTableAccountChanges,
};
