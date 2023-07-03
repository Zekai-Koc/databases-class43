const mongoose = require("mongoose");

// Dummy data for account collection.
const accounts = [
   {
      account_number: 100,
      balance: 1000,
      account_changes: [
         {
            change_number: 1,
            amount: 500,
            changed_date: "2023-06-20",
            remark: "Depozit",
         },
         {
            change_number: 2,
            amount: -200,
            changed_date: "2023-06-19",
            remark: "Withdrawal",
         },
      ],
   },
   {
      account_number: 101,
      balance: 500,
      account_changes: [
         {
            change_number: 1,
            amount: 1500,
            changed_date: "2023-06-17",
            remark: "Depozit",
         },
      ],
   },
   {
      account_number: 102,
      balance: 3000,
      account_changes: [
         {
            change_number: 1,
            amount: 1000,
            changed_date: "2023-06-21",
            remark: "Depozit",
         },
      ],
   },
   {
      account_number: 103,
      balance: 7000,
      account_changes: [
         {
            change_number: 1,
            amount: -500,
            changed_date: "2023-06-20",
            remark: "Withdrawal",
         },
      ],
   },
   {
      account_number: 104,
      balance: 5000,
      account_changes: [
         {
            change_number: 1,
            amount: 2500,
            changed_date: "2023-06-19",
            remark: "Depozit",
         },
         {
            change_number: 2,
            amount: 500,
            changed_date: "2023-06-16",
            remark: "Depozit",
         },
      ],
   },
];

const accountSchema = new mongoose.Schema({
   account_number: {
      type: Number,
      required: true,
   },
   balance: Number,
   account_changes: [
      {
         change_number: {
            type: Number,
         },
         amount: {
            type: Number,
         },
         changed_date: {
            type: Date,
            default: Date.now,
         },
         remark: {
            type: String,
         },
      },
   ],
});

const account = mongoose.model("account", accountSchema);
mongoose.connect("mongodb://localhost/databaseWeek4");
const db = mongoose.connection;

const fillAccountsArray = () => {
   return new Promise((res, rej) => {
      try {
         db.once("open", async () => {
            await account.deleteMany({});

            for (let i = 0; i < accounts.length; i++) {
               await account.create(accounts[i]);
            }

            console.log("Account info added to account table.");
            db.close();
            res("Account info added to account table.");
         });
      } catch (error) {
         db.close();
         rej(error);
      }
   });
};

module.exports = {
   fillAccountsArray,
   account,
};
