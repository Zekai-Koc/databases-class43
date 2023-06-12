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
export const createTableInvitee = (req, res) => {
   const tableName = `Invitee`;

   let sql = `CREATE TABLE ${tableName}(
      invitee_no int AUTO_INCREMENT, 
      invitee_name  VARCHAR(255), 
      invitee_by VARCHAR(255), 
      PRIMARY KEY (invitee_no))`;
   db.query(sql, (err, result) => {
      if (err) throw err;
      console.log(result);
      res.send(`${tableName} table created.`);
   });
};
