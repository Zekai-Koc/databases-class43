import mysql from "mysql";

const configDB = {
   user: "hyfuser",
   password: "hyfpassword",
   server: "localhost",
   database: "userdb",
};

// Create connection
const db = mysql.createConnection(configDB);

// Connect db
export const connectDB = (req, res) => {
   db.connect((err) => {
      if (err) throw err;
      console.log(`MySql connected...`);
      res.send(`Connected to DB: ${configDB.database}`);
   });
};
