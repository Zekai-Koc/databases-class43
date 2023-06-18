import mysql from "mysql";
import { config } from "./dbConfig.js";

export const createTable = (sql) => {
   return new Promise((resolve, reject) => {
      const connection = mysql.createConnection(config);
      try {
         connection.query(sql.create, (error, result) => {
            if (error)
               throw new Error(
                  `Error creating table: ${sql.tableName} ` + error.message
               );
            console.log(`Table: ${sql.tableName} is ready to use.`);
            resolve(result);
         });
      } catch (error) {
         reject(error);
      } finally {
         connection.end();
      }
   });
};
