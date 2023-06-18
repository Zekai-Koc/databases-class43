import "dotenv/config";

export const initialConfig = {
   user: process.env.USER,
   password: process.env.PASSWORD,
   server: process.env.HOST,
};

export const config = {
   user: process.env.USER,
   password: process.env.PASSWORD,
   server: process.env.HOST,
   database: process.env.DBNAME,
};
