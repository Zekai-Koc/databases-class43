
-- Inserting data into the 'account' table
INSERT INTO account (balance) VALUES (1000.00);
INSERT INTO account (balance) VALUES (2500.00);
INSERT INTO account (balance) VALUES (500.00);
INSERT INTO account (balance) VALUES (3500.00);

-- Inserting data into the 'account_changes' table
INSERT INTO account_changes (amount, changed_date, remark, account_number) VALUES (500.00, '2023-06-20', 'Deposit', 1);
INSERT INTO account_changes (amount, changed_date, remark, account_number) VALUES (-200.00, '2023-06-21', 'Withdrawal', 1);
INSERT INTO account_changes (amount, changed_date, remark, account_number) VALUES (1000.00, '2023-06-19', 'Deposit', 2);
INSERT INTO account_changes (amount, changed_date, remark, account_number) VALUES (-300.00, '2023-06-20', 'Withdrawal', 2);
INSERT INTO account_changes (amount, changed_date, remark, account_number) VALUES (200.00, '2023-06-18', 'Deposit', 3);
INSERT INTO account_changes (amount, changed_date, remark, account_number) VALUES (-100.00, '2023-06-19', 'Withdrawal', 3);
INSERT INTO account_changes (amount, changed_date, remark, account_number) VALUES (1500.00, '2023-06-21', 'Deposit', 4);
INSERT INTO account_changes (amount, changed_date, remark, account_number) VALUES (-500.00, '2023-06-22', 'Withdrawal', 4);
