import mysql from "mysql";
import { config } from "./dbConfig.js";

export const seedTable = (sql) => {
   return new Promise((resolve, reject) => {
      const connection = mysql.createConnection(config);
      try {
         connection.query(sql.insert, (error, result) => {
            if (error)
               throw new Error(
                  `Error seeding table: ${sql.tableName} ` + error.message
               );
            console.log(`Table: ${sql.tableName} seeded for use.`);
            resolve(result);
         });
      } catch (error) {
         reject(error);
      } finally {
         connection.end();
      }
   });
};
