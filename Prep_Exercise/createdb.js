import mysql from "mysql";
import { initialConfig } from "./dbConfig.js";

export const createDB = (sql) => {
   return new Promise((resolve, reject) => {
      const connection = mysql.createConnection(initialConfig);
      try {
         console.log("Checking/creating db...");
         connection.query(sql.create, (error, result) => {
            if (error)
               throw new Error(
                  `Error creating DB: ${sql.databaseName} ` + error.message
               );
            console.log(`DB: ${sql.databaseName} is ready to use.`);
            resolve(result);
         });
      } catch (error) {
         reject(error);
      } finally {
         connection.end();
      }
   });
};
