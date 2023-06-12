import mysql from "mysql";
import * as dbConfig from "./dbConfig.js";
import {
   createTableInviteeSQL,
   seedTableInviteeSQL,
   createTableMeetingSQL,
   seedTableMeetingSQL,
   createTableRoomSQL,
   seedTableRoomSQL,
   sqlObjects,
} from "./sqls.js";

const dbName = `meetup`;

export const createDB = (req, res) => {
   const db = mysql.createConnection(dbConfig.initialConfig);

   db.query(`DROP DATABASE IF EXISTS ${dbName}`, (err) => {
      if (err) throw err;
   });

   const sqlCreateDB = `CREATE DATABASE ${dbName}`;

   db.query(sqlCreateDB, (err, result) => {
      if (err) {
         console.log(`ERROR: \n ---------- \n`, err);
         res.status(500).send("An error occurred while creating the database.");
         return;
      }

      console.log(`Database created. Database name: ${dbName}`);
      db.end();
      res.send(`Database created. Database name: ${dbName}`);
   });
};

export const createAndSeedTables333 = async (req, res) => {
   const db = mysql.createConnection(dbConfig.config);

   try {
      sqlObjects.forEach(async (object) => {
         await createAndSeedTable333(db, object);
      });
   } catch (error) {
      console.log(error);
      res.send(error);
   } finally {
      db.end();
      console.log(`Tables created succesfully.`);
      res.send(`Tables created succesfully.`);
   }
};

const createAndSeedTable333 = (db, obj) => {
   return new Promise((resolve, reject) => {
      db.query(obj.drop, (err) => {
         if (err) reject(err);
      });

      db.query(obj.create, (err, result) => {
         if (err) reject(err);
      });

      db.query(obj.insert, (err, result) => {
         if (err) reject(err);
         resolve();
      });
   });
};

export const createAndSeedTables = async (req, res) => {
   const db = mysql.createConnection(dbConfig.config);

   try {
      await createAndSeedTable(
         db,
         "Invitee",
         createTableInviteeSQL,
         seedTableInviteeSQL
      );
      await createAndSeedTable(
         db,
         "Meeting",
         createTableMeetingSQL,
         seedTableMeetingSQL
      );
      await createAndSeedTable(
         db,
         "Room",
         createTableRoomSQL,
         seedTableRoomSQL
      );
   } catch (error) {
      console.log(error);
      res.send(error);
   } finally {
      db.end();
      console.log(`Tables created succesfully.`);
      res.send(`Tables created succesfully.`);
   }
};

const createAndSeedTable = (db, tName, createTSQL, seedTSQL) => {
   return new Promise((resolve, reject) => {
      db.query(`DROP TABLE IF EXISTS ${tName}`, (err) => {
         if (err) reject(err);
      });

      db.query(`CREATE TABLE ${tName} ${createTSQL}`, (err, result) => {
         if (err) reject(err);
      });

      db.query(`INSERT INTO ${tName} ${seedTSQL}`, (err, result) => {
         if (err) reject(err);
         resolve();
      });
   });
};
