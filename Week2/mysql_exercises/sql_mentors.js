const sqlCreateTableMentors = `CREATE TABLE IF NOT EXISTS mentors (
   mentor_id INT AUTO_INCREMENT PRIMARY KEY,
   mentor_name VARCHAR(255)
 );`;

const sqlInsertMentors = `INSERT INTO mentors (mentor_name)
 VALUES
   ('John Smith'),
   ('Emily Johnson'),
   ('Michael Davis'),
   ('Sarah Wilson'),
   ('David Thompson'),
   ('Jessica Anderson'),
   ('Christopher Martinez'),
   ('Amanda Taylor'),
   ('James Garcia'),
   ('Jennifer Brown'),
   ('Matthew Davis'),
   ('Elizabeth Anderson'),
   ('Daniel Johnson'),
   ('Olivia Martinez'),
   ('Andrew Wilson'),
   ('Sophia Thompson'),
   ('Joseph Smith'),
   ('Abigail Davis'),
   ('Joshua Taylor'),
   ('Mia Harris');
 `;

module.exports = {
   sqlCreateTableMentors,
   sqlInsertMentors,
};
