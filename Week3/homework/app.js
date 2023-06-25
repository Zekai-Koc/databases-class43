const { createDB, removeDB } = require("./dbutils/drop_create_db");
const createTable = require("./dbutils/createtable.js");
const { executeSQL } = require("./dbutils/executeSQL.js");
const { doTransaction } = require("./dbutils/transaction");

const {
   sqlCreateTableAccount,
   sqlCreateTableAccountChanges,
} = require("./3_2_Exercise_2_1_Transactions-create-tables");

const {
   sqlInsertAccount,
   sqlInsertAccountChanges,
} = require("./3_2_Exercise_2_2_Transactions-insert-values");

const {
   sqlTransaction,
   sqlTransactioStatements,
   sqlList,
} = require("./3_2_Exercise_2_3_Transaction");

async function mainFunction() {
   /* Create the DB for the first time (if not exists.) */
   await removeDB("databases_w3");
   await createDB("databases_w3");
   console.log(`--------------------------------`);

   /* Create the tables (if not exist.) */
   await createTable(sqlCreateTableAccount);
   await createTable(sqlCreateTableAccountChanges);
   console.log(`--------------------------------`);

   /* Seed tables */
   await executeSQL(sqlInsertAccount);
   await executeSQL(sqlInsertAccountChanges);
   console.log(`--------------------------------`);

   /* Execute the transaction */
   try {
      for (let i = 1; i < sqlTransactioStatements.length - 2; i++) {
         let result = await executeSQL(sqlTransactioStatements[i]);
         if (result.affectedRows === 0) throw error;
      }

      await executeSQL(
         sqlTransactioStatements[sqlTransactioStatements.length - 2]
      );
   } catch (error) {
      console.log("Rolling back...");
      await executeSQL(
         sqlTransactioStatements[sqlTransactioStatements.length - 1]
      );
   }
   console.log(`--------------------------------`);

   /* Execute the transaction. Another method.*/
   await doTransaction(sqlList);
}

mainFunction();
