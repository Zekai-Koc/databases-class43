import mysql from "mysql";
import {
   createTableInviteeSQL,
   seedTableInviteeSQL,
   createTableMeetingSQL,
   seedTableMeetingSQL,
   createTableRoomSQL,
   seedTableRoomSQL,
} from "./sqls.js";

const nameDB = `meetup`;

const configDB = {
   user: "root",
   password: "3570",
   server: "localhost",
   database: "meetup",
};

// const defaultConfigDB = {
//    user: "root",
//    password: "3570",
//    server: "localhost",
//    database: "meetup",
// };

let db = mysql.createConnection(configDB);

export const createDB = (req, res) => {
   db.query(`DROP DATABASE IF EXISTS ${nameDB}`, (err) => {
      if (err) throw err;
   });

   const sqlCreateDB = `CREATE DATABASE IF NOT EXISTS ${nameDB}`;

   db.query(sqlCreateDB, (err, result) => {
      if (err) {
         console.log(`ERROR: \n ---------- \n`, err);
         res.status(500).send("An error occurred while creating the database.");
         return;
      }

      console.log(`Database created. Database name: ${nameDB}`);
      res.send(`Database created. Database name: ${nameDB}`);
   });
};

// db = mysql.createConnection(defaultConfigDB);

export const createAndSeedTables = (req, res) => {
   try {
      createAndSeedTable("Invitee", createTableInviteeSQL, seedTableInviteeSQL);
      createAndSeedTable("Meeting", createTableMeetingSQL, seedTableMeetingSQL);
      createAndSeedTable("Room", createTableRoomSQL, seedTableRoomSQL);
   } catch (error) {
      console.log(error);
      res.send(error);
   }
   res.send(`Tables created succesfully.`);
};

const createAndSeedTable = (tName, createTSQL, seedTSQL) => {
   db.query(`DROP TABLE IF EXISTS ${tName}`, (err) => {
      if (err) throw err;
   });

   db.query(`CREATE TABLE ${tName} ${createTSQL}`, (err, result) => {
      if (err) throw err;
   });

   db.query(`INSERT INTO ${tName} ${seedTSQL}`, (err, result) => {
      if (err) throw err;
   });
};

// // Create Invitee Table
// const createTableInvitee = () => {
//    const db = mysql.createConnection(defaultConfigDB);

//    const tableName = `Invitee`;

//    db.query(`DROP TABLE IF EXISTS ${nameDB}`, (err) => {
//       if (err) throw err;
//    });

//    let sql = `CREATE TABLE IF NOT EXISTS ${tableName}(
//       invitee_no int AUTO_INCREMENT,
//       invitee_name  VARCHAR(255),
//       invitee_by VARCHAR(255),
//       PRIMARY KEY (invitee_no))`;
//    db.query(sql, (err, result) => {
//       if (err) throw err;
//       return `${tableName} table created.`;
//    });
// };

// // Create Meetin Table
// const createTableMeeting = () => {
//    const db = mysql.createConnection(defaultConfigDB);

//    const tableName = `Meeting`;

//    db.query(`DROP TABLE IF EXISTS ${nameDB}`, (err) => {
//       if (err) throw err;
//    });

//    let sql = `CREATE TABLE IF NOT EXISTS ${tableName}(
//       meeting_no int AUTO_INCREMENT,
//       meeting_title VARCHAR(255),
//       starting_time date,
//       ending_time date,
//       room_no int,
//       PRIMARY KEY (meeting_no))`;
//    db.query(sql, (err, result) => {
//       if (err) throw err;
//       return `${tableName} table created.`;
//    });
// };

// // Create Room Table
// const createTableRoom = () => {
//    const db = mysql.createConnection(defaultConfigDB);

//    const tableName = `Room`;

//    db.query(`DROP TABLE IF EXISTS ${nameDB}`, (err) => {
//       if (err) throw err;
//    });

//    let sql = `CREATE TABLE IF NOT EXISTS ${tableName}(
//       room_no int AUTO_INCREMENT,
//       room_name  VARCHAR(255),
//       floor_number int,
//       PRIMARY KEY (room_no))`;
//    db.query(sql, (err, result) => {
//       if (err) throw err;
//       return `${tableName} table created.`;
//    });
// };

// export const seedTables = (req, res) => {
//    try {
//       seedTableInvitee();
//       seedTableMeeting();
//       seedTableRoom();
//    } catch (error) {
//       console.log(error);
//       res.send(error);
//    }
//    res.send(`Tables seeded succesfully.`);
// };

// const seedTableInvitee = () => {
//    const db = mysql.createConnection(defaultConfigDB);

//    const tableName = `Invitee`;

//    let sql = `INSERT INTO ${tableName} (invitee_name, invitee_by)
//    VALUES ('John Doe', 'Jane Smith'), ('Alice Johnson', 'Bob Anderson'), ('Sarah Williams', 'Michael Brown'), ('Emily Davis', 'David Johnson'), ('Daniel Wilson', 'Karen Thompson');`;
//    db.query(sql, (err, result) => {
//       if (err) throw err;
//       console.log(result);
//       return `${tableName} table seeded.`;
//    });
// };

// const seedTableMeeting = () => {
//    const db = mysql.createConnection(defaultConfigDB);

//    const tableName = `Meeting`;

//    let sql = `INSERT INTO ${tableName} (meeting_title, starting_time, ending_time, room_no) VALUES ('Project Kickoff Meeting', '2023-06-11', '2023-06-11', 101), ('Sales Strategy Discussion', '2023-06-12', '2023-06-12', 205), ('Team Collaboration Session', '2023-06-13', '2023-06-13', 302), ('Product Roadmap Planning', '2023-06-14', '2023-06-14', 401), ('Monthly Performance Review', '2023-06-15', '2023-06-15', 512);`;
//    db.query(sql, (err, result) => {
//       if (err) throw err;
//       console.log(result);
//       return `${tableName} table seeded.`;
//    });
// };

// const seedTableRoom = () => {
//    const db = mysql.createConnection(defaultConfigDB);

//    const tableName = `Room`;

//    let sql = `INSERT INTO ${tableName} (room_name, floor_number) VALUES ('Conference Room A', 1), ('Boardroom', 2), ('Training Room 1', 1), ('Meeting Room B', 3), ('Executive Suite', 5);`;
//    db.query(sql, (err, result) => {
//       if (err) throw err;
//       console.log(result);
//       return `${tableName} table seeded.`;
//    });
// };
