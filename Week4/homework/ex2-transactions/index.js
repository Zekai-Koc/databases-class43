const mongoose = require("mongoose");

const { fillAccountsArray } = require("./setup");
const { transfer, transferTransaction } = require("./transfer");

async function main() {
   await fillAccountsArray();

   /* Optional, seperate calls */
   // await transfer(101, -1000, "Sended to 102...");
   // await transfer(102, 1000, "Recieved from 101...");

   transferTransaction(101, 102, 1000, "Transfer from 101 to 102");
}

main();
