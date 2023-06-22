START TRANSACTION;
UPDATE account SET balance = balance - 1000 WHERE account_no = 101 ;
UPDATE account SET balance = balance + 1000 WHERE account_no = 102 ;
UPDATE account_changes  SET 
   amount = 1000,
   changed_date = now(),
   remark = 'transferred to account number 102',
   account_number = 101;

COMMIT;

CREATE TABLE account_changes (
   change_number INT AUTO_INCREMENT PRIMARY KEY, 
   amount float, 
   changed_date Date, 
   remark Text,
   FOREIGN key (account_number) REFERENCES account(account_number),
   )
