import "dotenv/config";

export const initialConfig = {
   user: process.env.DBUSER,
   password: process.env.PASSWORD,
   host: process.env.DBHOST,
};

export const config = {
   user: process.env.DBUSER,
   password: process.env.PASSWORD,
   host: process.env.DBHOST,
   database: process.env.DBNAME,
};
