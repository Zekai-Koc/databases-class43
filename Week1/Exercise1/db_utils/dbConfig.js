import "dotenv/config";

export const initialConfig = {
   user: process.env.USER,
   password: process.env.PASSWORD,
   server: process.env.SERVER,
};

export const config = {
   user: process.env.USER,
   password: process.env.PASSWORD,
   server: process.env.SERVER,
   database: process.env.DBNAME,
};
