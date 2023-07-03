const mongoose = require("mongoose");
const { account } = require("./setup");

const validateNumber = (input) =>
   typeof input === "number" && !Number.isNaN(input);

const validateNotEmpty = (input) => input.trim() !== "";

const accountExists = async (accountNumber) => {
   const count = await account.countDocuments({
      account_number: accountNumber,
   });

   return count > 0;
};

// Check all the input argument for validity.
const validateInputs = async (fromAccount, toAccount, amount, remark) => {
   if (
      !(
         validateNumber(fromAccount) &&
         validateNumber(toAccount) &&
         validateNumber(amount)
      )
   ) {
      console.error("Validation error! Incorrect input type!");
      return false;
   }

   if (!validateNotEmpty(remark)) {
      console.error("Validation error! Empty remark!");
      return false;
   }

   if (
      !((await accountExists(fromAccount)) && (await accountExists(toAccount)))
   ) {
      console.error("Validation error! Incorrect account number!");
      return false;
   }
   return true;
};

// Check if the balance is sufficient for transfering.
const checkBalance = async (accountNumber, amount) => {
   try {
      const currentAccount = await account.findOne({
         account_number: accountNumber,
      });
      return currentAccount.balance >= amount;
   } catch (error) {
      throw new Error("Error while checking balance:");
   }
};

const transfer = async (accountNumber, amount, remark) => {
   const currentAccount = await account.findOne({
      account_number: accountNumber,
   });

   const accountChanges = {
      change_number: currentAccount.account_changes.length + 1,
      amount: amount,
      changed_date: Date.now(),
      remark: remark,
   };

   await account.findOneAndUpdate(
      { account_number: accountNumber },
      {
         $inc: { balance: amount },
         $push: {
            account_changes: accountChanges,
         },
      }
   );
   console.log(
      `Transferring from account: ${accountNumber}, amount: ${amount}, note: "${remark}".`
   );
};

const transferTransaction = async (fromAccount, toAccount, amount, remark) => {
   mongoose.connect("mongodb://localhost/databaseWeek4");
   const db = mongoose.connection;

   const session = await db.startSession();

   if (!(await validateInputs(fromAccount, toAccount, amount, remark))) return;

   try {
      session.startTransaction();

      // This check can also be done before transaction, however for demo purposes i've prefered to keep it here.
      if (!(await checkBalance(fromAccount, amount)))
         throw new Error("Insufficient balance!");

      await transfer(fromAccount, -amount, remark);
      await transfer(toAccount, amount, remark);
      await session.commitTransaction();
   } catch (error) {
      console.log("Error on Transaction. Aborting... " + error.message);
      await session.abortTransaction();
   }
   session.endSession();
};

module.exports = transferTransaction;
