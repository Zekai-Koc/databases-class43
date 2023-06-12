import mysql from "mysql";

const configDB = {
   user: "root",
   password: "3570",
   server: "localhost",
};

const db = mysql.createConnection(configDB);

export const createDB = (req, res) => {
   const nameDB = `meetup`;
   const sql = `CREATE DATABASE ${nameDB}`;
   db.query(sql, (err, result) => {
      if (err) console.log(`HAPPY ERROR: \n ---------- \n`, err);
      console.log(result);
      res.send(`DB created. DB name: ${nameDB}`);
   });
};
