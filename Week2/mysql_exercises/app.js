const mysql = require("mysql");
const createDB = require("./createdb.js");
const createTable = require("./createtable.js");
const executeSQL = require("./executeSQL.js");

const {
   sqlCreateTableAuthors,
   sqlInsertAuthors,
} = require("./sql_table_authors.js");

const {
   sqlCreateTableResearchPapers,
   sqlInsertResearchPapers,
} = require("./sql_table_researchpapers.js");

const {
   sqlCreateTableMentors,
   sqlInsertMentors,
} = require("./sql_table_mentors.js");

const {
   sqlCreateTableAuthorsPapers,
   sqlInsertAuthorsPapers,
} = require("./sql_table_authorspapers.js");

const { sqlAuthorsMentors, sqlAuthorsPapers } = require("./sql_joins.js");

const {
   sqlAggregate1,
   sqlAggregate2,
   sqlAggregate3,
   sqlAggregate4,
   sqlAggregate5,
} = require("./sql_aggregate_functions.js");

async function mainFunction() {
   /* 3. MySQL exercises */
   await createDB("databases_w2");
   console.log(`--------------------------------`);
   /* 3.1. Exercise 1: Keys */
   await createTable(sqlCreateTableMentors);
   await executeSQL(sqlInsertMentors);
   console.log(`--------------------------------`);

   await createTable(sqlCreateTableAuthors);
   await executeSQL(sqlInsertAuthors);
   console.log(`--------------------------------`);

   /* 3.2. Exercise 2: Relationships */
   await createTable(sqlCreateTableResearchPapers);
   await executeSQL(sqlInsertResearchPapers);
   console.log(`--------------------------------`);

   await createTable(sqlCreateTableAuthorsPapers);
   await executeSQL(sqlInsertAuthorsPapers);
   console.log(`--------------------------------`);

   /* 3.3. Exercise 3: Joins */
   await executeSQL(sqlAuthorsMentors);
   await executeSQL(sqlAuthorsPapers);
   console.log(`--------------------------------`);

   /* 3.4 Exercise 4: Aggregate Functions */
   await executeSQL(sqlAggregate1);
   await executeSQL(sqlAggregate2);
   await executeSQL(sqlAggregate3);
   await executeSQL(sqlAggregate4);
   await executeSQL(sqlAggregate5);
}

mainFunction();
