import mysql from "mysql";

const configDB = {
   user: "hyfuser",
   password: "hyfpassword",
   server: "localhost",
   database: "userdb",
};

// Create connection
const db = mysql.createConnection(configDB);

// Create table
export const createTableMeeting = (req, res) => {
   const tableName = `Meeting`;

   let sql = `CREATE TABLE ${tableName}(
      meeting_no int AUTO_INCREMENT, 
      meeting_title VARCHAR(255), 
      starting_time date, 
      ending_time date, 
      room_no int, 
      PRIMARY KEY (meeting_no))`;
   db.query(sql, (err, result) => {
      if (err) throw err;
      console.log(result);
      res.send(`${tableName} table created.`);
   });
};
