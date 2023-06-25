const sqlInsertAccount = `INSERT INTO account (account_number, balance) VALUES
  (100, 1000.00),
  (101, 2500.00),
  (102, 500.00),
  (103, 3500.00);`;

const sqlInsertAccountChanges = `INSERT INTO account_changes (amount, changed_date, remark, account_number) VALUES
  (500.00, '2023-06-20', 'Deposit', 101),
  (-200.00, '2023-06-21', 'Withdrawal', 101),
  (1000.00, '2023-06-19', 'Deposit', 102),
  (-300.00, '2023-06-20', 'Withdrawal', 102),
  (200.00, '2023-06-18', 'Deposit', 103),
  (-100.00, '2023-06-19', 'Withdrawal', 103),
  (1500.00, '2023-06-21', 'Deposit', 100),
  (-500.00, '2023-06-22', 'Withdrawal', 100);`;

module.exports = {
   sqlInsertAccount,
   sqlInsertAccountChanges,
};
