export const dbSQLs = {
   dbName: `meetup`,
   drop: `DROP DATABASE IF EXISTS meetup`,
   create: `CREATE DATABASE meetup`,
};

export const tableSQLs = [
   {
      // name: "Invitee",
      drop: `DROP TABLE IF EXISTS Invitee`,
      create: `CREATE TABLE Invitee (
         invitee_no int AUTO_INCREMENT, 
         invitee_name  VARCHAR(255), 
         invitee_by VARCHAR(255), 
         PRIMARY KEY (invitee_no))`,
      insert: `INSERT INTO Invitee (invitee_name, invitee_by)
      VALUES ('John Doe', 'Jane Smith'), ('Alice Johnson', 'Bob Anderson'), ('Sarah Williams', 'Michael Brown'), ('Emily Davis', 'David Johnson'), ('Daniel Wilson', 'Karen Thompson');`,
   },
   {
      // name: "Meeting",
      drop: `DROP TABLE IF EXISTS Meeting`,
      create: `CREATE TABLE Meeting (
      meeting_no int AUTO_INCREMENT, 
      meeting_title VARCHAR(255), 
      starting_time date, 
      ending_time date, 
      room_no int, 
      PRIMARY KEY (meeting_no))`,
      insert: `INSERT INTO Meeting (meeting_title, starting_time, ending_time, room_no) VALUES ('Project Kickoff Meeting', '2023-06-11', '2023-06-11', 101), ('Sales Strategy Discussion', '2023-06-12', '2023-06-12', 205), ('Team Collaboration Session', '2023-06-13', '2023-06-13', 302), ('Product Roadmap Planning', '2023-06-14', '2023-06-14', 401), ('Monthly Performance Review', '2023-06-15', '2023-06-15', 512);`,
   },
   {
      // name: "Room",
      drop: `DROP TABLE IF EXISTS Room`,
      create: `CREATE TABLE Room (
         room_no int AUTO_INCREMENT, 
         room_name  VARCHAR(255), 
         floor_number int, 
         PRIMARY KEY (room_no));`,
      insert: `INSERT INTO Room (room_name, floor_number) VALUES ('Conference Room A', 1), ('Boardroom', 2), ('Training Room 1', 1), ('Meeting Room B', 3), ('Executive Suite', 5);`,
   },
];

// export const createTableInviteeSQL = ` (
//    invitee_no int AUTO_INCREMENT,
//    invitee_name  VARCHAR(255),
//    invitee_by VARCHAR(255),
//    PRIMARY KEY (invitee_no))`;

// export const createTableMeetingSQL = ` (
//       meeting_no int AUTO_INCREMENT,
//       meeting_title VARCHAR(255),
//       starting_time date,
//       ending_time date,
//       room_no int,
//       PRIMARY KEY (meeting_no))`;

// export const createTableRoomSQL = ` (
//          room_no int AUTO_INCREMENT,
//          room_name  VARCHAR(255),
//          floor_number int,
//          PRIMARY KEY (room_no))`;

// export const seedTableInviteeSQL = ` (invitee_name, invitee_by)
//    VALUES ('John Doe', 'Jane Smith'), ('Alice Johnson', 'Bob Anderson'), ('Sarah Williams', 'Michael Brown'), ('Emily Davis', 'David Johnson'), ('Daniel Wilson', 'Karen Thompson');`;

// export const seedTableMeetingSQL = ` (meeting_title, starting_time, ending_time, room_no) VALUES ('Project Kickoff Meeting', '2023-06-11', '2023-06-11', 101), ('Sales Strategy Discussion', '2023-06-12', '2023-06-12', 205), ('Team Collaboration Session', '2023-06-13', '2023-06-13', 302), ('Product Roadmap Planning', '2023-06-14', '2023-06-14', 401), ('Monthly Performance Review', '2023-06-15', '2023-06-15', 512);`;

// export const seedTableRoomSQL = ` (room_name, floor_number) VALUES ('Conference Room A', 1), ('Boardroom', 2), ('Training Room 1', 1), ('Meeting Room B', 3), ('Executive Suite', 5);`;
