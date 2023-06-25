const sqlTransaction = `SET autocommit = 0; START TRANSACTION; UPDATE account SET balance = balance - 1000 WHERE account_number = 1; UPDATE account SET balance = balance + 1000 WHERE account_number = 2; INSERT INTO account_changes (amount, changed_date, remark, account_number) VALUES  (1000, CURDATE(), 'transferred to account number 2', 1); COMMIT;
   `;

const sqlTransactioStatements = [
   "START TRANSACTION;",
   "UPDATE account SET balance = balance - 1000 WHERE account_number = 101;",
   "UPDATE account SET balance = balance + 1000 WHERE account_number = 102;",
   "INSERT INTO account_changes (amount, changed_date, remark, account_number) VALUES (1000, CURDATE(), 'Transferred to account number 102', 101);",
   "COMMIT;",
   "ROLLBACK;",
];

const sqlList = [
   "UPDATE account SET balance = balance - 3333 WHERE account_number = 100;",
   "UPDATE account SET balance = balance + 3333 WHERE account_number = 103;",
   "INSERT INTO account_changes (amount, changed_date, remark, account_number) VALUES (3333, CURDATE(), 'Transferred to account number 103 from 100', 100);",
];

module.exports = {
   sqlTransaction,
   sqlTransactioStatements,
   sqlList,
};
