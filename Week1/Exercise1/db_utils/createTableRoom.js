import mysql from "mysql";

const configDB = {
   user: "hyfuser",
   password: "hyfpassword",
   server: "localhost",
   database: "meetup",
};

// Create connection
const db = mysql.createConnection(configDB);

// Create table
export const createTableRoom = (req, res) => {
   const tableName = `Room`;

   let sql = `CREATE TABLE ${tableName}(
      room_no int AUTO_INCREMENT, 
      room_name  VARCHAR(255), 
      floor_number int, 
      PRIMARY KEY (room_no))`;
   db.query(sql, (err, result) => {
      if (err) throw err;
      console.log(result);
      res.send(`${tableName} table created.`);
   });
};
