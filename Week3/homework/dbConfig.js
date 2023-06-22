require("dotenv").config();

const initialConfig = {
   user: process.env.USER,
   password: process.env.PASSWORD,
   server: process.env.SERVER,
};

const config = {
   user: process.env.USER,
   password: process.env.PASSWORD,
   server: process.env.SERVER,
   database: process.env.DBNAME,
};

module.exports = { initialConfig, config };
