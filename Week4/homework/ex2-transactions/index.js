const mongoose = require("mongoose");

const { fillAccountsArray } = require("./setup");
const transferTransaction = require("./transfer");

async function main() {
   console.log("Creating account collection...");
   await fillAccountsArray();

   console.log("\n!!! Checking for invalid inputs !!!");
   await transferTransaction(
      9999,
      102,
      1000,
      "Transfer from 9999 to 102 - Incorrect account number!"
   );
   await transferTransaction(
      101,
      "102",
      1000,
      "Transfer from 101 to 102 - Incorrect input type!"
   );
   await transferTransaction(
      101,
      102,
      "1000",
      "Transfer from 101 to 102 - Incorrect input type!"
   );
   await transferTransaction(101, 102, 1000, "       "); // Incorrect input type!
   await transferTransaction(
      101,
      102,
      10000,
      "Transfer from 101 to 102 - Insufficient balance!"
   );

   console.log("\n*** Execute the transaction... ***");
   await transferTransaction(101, 102, 1000, "Transfer from 101 to 102");
}

main();
