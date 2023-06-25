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
   multipleStatements: true,
};

const configWorldDb = {
   user: process.env.USER,
   password: process.env.PASSWORD,
   server: process.env.HOST,
   database: process.env.DBNAMEWD,
   multipleStatements: true,
};

module.exports = { initialConfig, config, configWorldDb };
