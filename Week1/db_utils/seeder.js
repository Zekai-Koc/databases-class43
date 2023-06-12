import mysql from "mysql";

const configDB = {
   user: "hyfuser",
   password: "hyfpassword",
   server: "localhost",
   database: "meetup",
};

// Create connection
const db = mysql.createConnection(configDB);

export const seedTableInvitee = (req, res) => {
   const tableName = `Invitee`;

   let sql = `INSERT INTO ${tableName} (invitee_name, invitee_by)
   VALUES ('John Doe', 'Jane Smith'), ('Alice Johnson', 'Bob Anderson'), ('Sarah Williams', 'Michael Brown'), ('Emily Davis', 'David Johnson'), ('Daniel Wilson', 'Karen Thompson');`;
   db.query(sql, (err, result) => {
      if (err) throw err;
      console.log(result);
      res.send(`${tableName} table seeded.`);
   });
};

export const seedTableMeeting = (req, res) => {
   const tableName = `Meeting`;

   let sql = `INSERT INTO ${tableName} (meeting_title, starting_time, ending_time, room_no) VALUES ('Project Kickoff Meeting', '2023-06-11', '2023-06-11', 101), ('Sales Strategy Discussion', '2023-06-12', '2023-06-12', 205), ('Team Collaboration Session', '2023-06-13', '2023-06-13', 302), ('Product Roadmap Planning', '2023-06-14', '2023-06-14', 401), ('Monthly Performance Review', '2023-06-15', '2023-06-15', 512);`;
   db.query(sql, (err, result) => {
      if (err) throw err;
      console.log(result);
      res.send(`${tableName} table seeded.`);
   });
};

export const seedTableRoom = (req, res) => {
   const tableName = `Room`;

   let sql = `INSERT INTO ${tableName} (room_name, floor_number) VALUES ('Conference Room A', 1), ('Boardroom', 2), ('Training Room 1', 1), ('Meeting Room B', 3), ('Executive Suite', 5);`;
   db.query(sql, (err, result) => {
      if (err) throw err;
      console.log(result);
      res.send(`${tableName} table seeded.`);
   });
};
