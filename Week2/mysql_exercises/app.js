const mysql = require("mysql");
const createDB = require("./createdb.js");
const createTable = require("./createtable.js");
const executeSQL = require("./executeSQL.js");
const {
   sqlCreateTableAuthors,
   sqlAddColumnToAuthors,
   sqlCreateTablePlus,
   sqlInsertAuthors,
} = require("./sql_authors.js");
const {
   sqlCreateTableResearchPapers,
   sqlAddColumnToResearchPapers,
   sqlInsertResearchPapers,
} = require("./sql_researchpapers.js");

const { sqlCreateTableMentors, sqlInsertMentors } = require("./sql_mentors.js");
const {
   sqlCreateTableAuthorsPapers,
   sqlInsertAuthorsPapers,
} = require("./sql_authorspapers.js");
const { sqlAuthorsMentors, sqlAuthorsPapers } = require("./sql_joins.js");

async function mainFunction() {
   await createDB("databases_w2");
   await createTable(sqlCreateTableMentors);
   await executeSQL(sqlInsertMentors);

   await createTable(sqlCreateTableAuthors);
   await executeSQL(sqlInsertAuthors);

   await createTable(sqlCreateTableResearchPapers);
   await executeSQL(sqlInsertResearchPapers);

   await createTable(sqlCreateTableAuthorsPapers);
   await executeSQL(sqlInsertAuthorsPapers);

   // await executeSQL(sqlAuthorsMentors);
   // await executeSQL(sqlAuthorsPapers);
}

mainFunction();
