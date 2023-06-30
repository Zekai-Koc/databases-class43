const mongoose = require("mongoose");
const { account } = require("./setup");

const transfer = async (accountNum, amount, remark) => {
   mongoose.connect("mongodb://localhost/databaseWeek4");
   const db = mongoose.connection;

   const currentAccount = await account.findOne({
      account_number: accountNum,
   });

   const newBalance = currentAccount.balance + amount;
   const nextChangeNumber = currentAccount.account_changes.length + 1;

   const accountChanges = {
      change_number: nextChangeNumber,
      amount: amount,
      changed_date: Date.now(),
      remark: remark,
   };

   await account.findOneAndUpdate(
      { account_number: accountNum },
      {
         balance: newBalance,
         $push: {
            account_changes: accountChanges,
         },
      }
   );
   console.log("transferring...", accountNum, amount, remark);
};

const transferTransaction = async (fromAccount, toAccount, amount, remark) => {
   mongoose.connect("mongodb://localhost/databaseWeek4");
   const db = mongoose.connection;

   const session = await db.startSession();
   try {
      session.startTransaction();
      await transfer(fromAccount, -amount, remark);
      await transfer(toAccount, amount, remark);
      await session.commitTransaction();
   } catch (error) {
      console.log("Error on Transaction. Aborting...");
      await session.abortTransaction();
   }
   session.endSession();
};

module.exports = {
   transfer,
   transferTransaction,
};
