export const dbSQLs = {
   dbName: `meetup`,
   drop: `DROP DATABASE IF EXISTS meetup`,
   create: `CREATE DATABASE meetup`,
};

const tableNames = ["Invitee", "Meeting", "Room"];

export const tableSQLs = [
   {
      name: "Invitee",
      drop: `DROP TABLE IF EXISTS ${tableNames[0]}`,
      create: `CREATE TABLE ${tableNames[0]} (
         invitee_no int AUTO_INCREMENT, 
         invitee_name  VARCHAR(255), 
         invitee_by VARCHAR(255), 
         PRIMARY KEY (invitee_no))`,
      insert: `INSERT INTO ${tableNames[0]} (invitee_name, invitee_by)
      VALUES ('John Doe', 'Jane Smith'), ('Alice Johnson', 'Bob Anderson'), ('Sarah Williams', 'Michael Brown'), ('Emily Davis', 'David Johnson'), ('Daniel Wilson', 'Karen Thompson');`,
   },
   {
      name: "Meeting",
      drop: `DROP TABLE IF EXISTS ${tableNames[1]}`,
      create: `CREATE TABLE ${tableNames[1]} (
      meeting_no int AUTO_INCREMENT, 
      meeting_title VARCHAR(255), 
      starting_time date, 
      ending_time date, 
      room_no int, 
      PRIMARY KEY (meeting_no))`,
      insert: `INSERT INTO ${tableNames[1]} (meeting_title, starting_time, ending_time, room_no) VALUES ('Project Kickoff Meeting', '2023-06-11', '2023-06-11', 101), ('Sales Strategy Discussion', '2023-06-12', '2023-06-12', 205), ('Team Collaboration Session', '2023-06-13', '2023-06-13', 302), ('Product Roadmap Planning', '2023-06-14', '2023-06-14', 401), ('Monthly Performance Review', '2023-06-15', '2023-06-15', 512);`,
   },
   {
      name: "Room",
      drop: `DROP TABLE IF EXISTS ${tableNames[2]}`,
      create: `CREATE TABLE ${tableNames[2]} (
         room_no int AUTO_INCREMENT, 
         room_name  VARCHAR(255), 
         floor_number int, 
         PRIMARY KEY (room_no));`,
      insert: `INSERT INTO ${tableNames[2]} (room_name, floor_number) VALUES ('Conference Room A', 1), ('Boardroom', 2), ('Training Room 1', 1), ('Meeting Room B', 3), ('Executive Suite', 5);`,
   },
];
