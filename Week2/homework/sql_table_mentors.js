const sqlCreateTableMentors = `
   CREATE TABLE IF NOT EXISTS mentors (
      mentor_id INT AUTO_INCREMENT PRIMARY KEY,
      mentor_name VARCHAR(255) NOT NULL UNIQUE
 );`;

const sqlInsertMentors = `
   INSERT INTO mentors (mentor_name) VALUES ('Robert Johnson'),
      ('Emily Johnson'),
      ('Daniel Davis'),
      ('Jessica Wilson'),
      ('Andrew Thompson'),
      ('Olivia Martinez'),
      ('Christopher Garcia'),
      ('Amanda Taylor'),
      ('James Smith'),
      ('Jennifer Brown'),
      ('Matthew Davis'),
      ('Elizabeth Anderson'),
      ('David Johnson'),
      ('Sophia Martinez'),
      ('Michael Wilson'),
      ('Abigail Thompson'),
      ('Joseph Harris'),
      ('Mia Davis'),
      ('Joshua Taylor'),
      ('Emma Harris')
;`;

module.exports = {
   sqlCreateTableMentors,
   sqlInsertMentors,
};
