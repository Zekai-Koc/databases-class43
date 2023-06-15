import mysql from "mysql";
import * as dbConfig from "./dbConfig.js";
import { tableSQLs, dbSQLs } from "./sqlStatements.js";

export const createDB = (req, res) => {
   const db = mysql.createConnection(dbConfig.initialConfig);

   db.query(dbSQLs.drop, (err) => {
      if (err) {
         res.status(500).send("An error occurred while dropping the database.");
         return;
      }
      console.log(`Database dropped. Database name: ${dbSQLs.dbName}`);
   });
   db.query(dbSQLs.create, (err) => {
      if (err) {
         res.status(500).send("An error occurred while creating the database.");
         return;
      }
      db.end();
      console.log(`Database created. Database name: ${dbSQLs.dbName}`);
      res.send(`Database created. Database name: ${dbSQLs.dbName}`);
   });
};

export const createAndSeedTables = async (req, res) => {
   const db = mysql.createConnection(dbConfig.config);
   try {
      tableSQLs.forEach(async (object) => {
         await createAndSeedTable(db, object);
      });
   } catch (error) {
      console.log(`Error creating tables`, error);
      res.send(`Error creating tables`, error);
   } finally {
      db.end();
      console.log(`Tables created succesfully.`);
      res.send(`Tables created succesfully.`);
   }
};

const createAndSeedTable = (db, obj) => {
   return new Promise((resolve, reject) => {
      db.query(obj.drop, (err) => {
         if (err) reject(err);
      });
      db.query(obj.create, (err) => {
         if (err) reject(err);
      });
      db.query(obj.insert, (err) => {
         if (err) reject(err);
         resolve();
      });
   });
};
