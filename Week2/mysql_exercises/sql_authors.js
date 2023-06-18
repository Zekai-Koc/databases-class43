const sqlCreateTableAuthors = `CREATE TABLE IF NOT EXISTS authors (
   author_id INT PRIMARY KEY,
   author_name VARCHAR(255),
   university VARCHAR(255),
   date_of_birth DATE,
   h_index INT,
   gender ENUM('Male', 'Female'),
   mentor_id INT,
   CONSTRAINT fk_mentor FOREIGN KEY (mentor_id) REFERENCES mentors(mentor_id)
   );`;

const sqlInsertAuthors = `
INSERT INTO authors (author_id, author_name, university, date_of_birth, h_index, gender, mentor_id)
VALUES
   (1, 'John Smith', 'Massachusetts Institute of Technology', '1985-07-12', 18, 'Male', 2),
   (2, 'Emily Johnson', 'Stanford University', '1990-02-28', 12, 'Female', 1),
   (3, 'Michael Davis', 'Harvard University', '1988-09-15', 15, 'Male', 4),
   (4, 'Sarah Thompson', 'University of California, Berkeley', '1992-11-05', 10, 'Female', 3),
   (5, 'David Anderson', 'California Institute of Technology', '1987-04-20', 20, 'Male', 6),
   (6, 'Jessica Brown', 'Princeton University', '1991-06-18', 14, 'Female', 5),
   (7, 'Daniel Wilson', 'University of Oxford', '1989-03-24', 16, 'Male', 8),
   (8, 'Sophia Miller', 'University of Cambridge', '1993-09-02', 9, 'Female', 7),
   (9, 'Ethan Clark', 'ETH Zurich', '1986-11-14', 13, 'Male', 2),
   (10, 'Olivia Davis', 'University of Chicago', '1994-08-09', 11, 'Female', 3),
   (11, 'James Taylor', 'Columbia University', '1987-12-30', 17, 'Male', 3),
   (12, 'Ava Wilson', 'University of Toronto', '1990-04-06', 8, 'Female', 12),
   (13, 'Logan Anderson', 'University of Tokyo', '1988-10-25', 19, 'Male', 11),
   (14, 'Emma Brown', 'Imperial College London', '1992-02-15', 12, 'Female', 15),
   (15, 'Mason Johnson', 'University of Melbourne', '1989-05-21', 15, 'Male', 3),
   (16, 'Noah Thompson', 'University of California, Berkeley', '1991-08-14', 13, 'Male', 12),
   (17, 'Samantha Wilson', 'Stanford University', '1988-02-27', 16, 'Female', 9),
   (18, 'William Davis', 'Harvard University', '1993-09-10', 11, 'Male', 13),
   (19, 'Sophia Johnson', 'Massachusetts Institute of Technology', '1986-12-05', 18, 'Female', 14),
   (20, 'Ethan Smith', 'California Institute of Technology', '1990-05-30', 14, 'Male', 5),
   (21, 'Emma Taylor', 'University of Oxford', '1987-10-19', 17, 'Female', 6),
   (22, 'Michael Anderson', 'University of Cambridge', '1992-03-09', 9, 'Male', 7),
   (23, 'Olivia Miller', 'ETH Zurich', '1989-06-26', 15, 'Female', 1),
   (24, 'Daniel Brown', 'University of Chicago', '1991-12-11', 12, 'Male', 9),
   (25, 'Ava Johnson', 'Columbia University', '1988-04-28', 20, 'Female', 2); `;

// const sqlCreateTablePlus = `CREATE TABLE IF NOT EXISTS authors (
//   author_id INT PRIMARY KEY,
//   author_name VARCHAR(255),
//   university VARCHAR(255),
//   date_of_birth DATE,
//   h_index INT,
//   gender VARCHAR(255),
//   mentor INT,
//   CONSTRAINT fk_mentor FOREIGN KEY (mentor) REFERENCES authors(author_id)
// );`;

// const sqlAddColumnToAuthors = `ALTER TABLE authors
// ADD COLUMN mentor_id INT,
// ADD CONSTRAINT fk_mentor
// FOREIGN KEY (mentor_id) REFERENCES mentors(mentor_id);`;

// const sqlInsertAuthors = `INSERT INTO authors (author_id, author_name, university, date_of_birth, h_index, gender, mentor_id)
// VALUES
//   (1, 'John Smith', 'Harvard University', '1990-05-10', 10, 'Male', 2),
//   (2, 'Emily Johnson', 'Stanford University', '1992-09-15', 8, 'Female', 1),
//   (3, 'Michael Davis', 'Massachusetts Institute of Technology', '1988-03-20', 12, 'Male', 4),
//   (4, 'Sarah Wilson', 'Harvard University', '1991-07-25', 9, 'Female', 3),
//   (5, 'David Thompson', 'Stanford University', '1995-02-18', 7, 'Male', 6),
//   (6, 'Jessica Anderson', 'University of California, Berkeley', '1993-11-30', 11, 'Female', 5),
//   (7, 'Christopher Martinez', 'Massachusetts Institute of Technology', '1994-06-12', 13, 'Male', 8),
//   (8, 'Amanda Taylor', 'University of California, Berkeley', '1989-08-05', 6, 'Female', 7),
//   (9, 'James Garcia', 'Stanford University', '1996-04-22', 10, 'Male', 10),
//   (10, 'Jennifer Brown', 'Harvard University', '1992-12-08', 8, 'Female', 9),
//   (11, 'Matthew Davis', 'University of California, Berkeley', '1993-03-27', 12, 'Male', 12),
//   (12, 'Elizabeth Anderson', 'Massachusetts Institute of Technology', '1991-09-14', 9, 'Female', 11),
//   (13, 'Daniel Johnson', 'University of California, Berkeley', '1994-01-04', 7, 'Male', 14),
//   (14, 'Olivia Martinez', 'Stanford University', '1995-06-29', 11, 'Female', 13),
//   (15, 'Andrew Wilson', 'Massachusetts Institute of Technology', '1988-11-17', 10, 'Male', 16),
//   (16, 'Sophia Thompson', 'Harvard University', '1990-07-12', 8, 'Female', 2),
//   (17, 'Joseph Smith', 'University of California, Berkeley', '1992-03-28', 9, 'Male', 15),
//   (18, 'Abigail Davis', 'Stanford University', '1989-09-05', 12, 'Female', 4),
//   (19, 'Joshua Taylor', 'Massachusetts Institute of Technology', '1993-01-22', 10, 'Male', 6),
//   (20, 'Mia Harris', 'University of California, Berkeley', '1991-05-08', 11, 'Female', 8);
// `;

module.exports = {
   sqlCreateTableAuthors,
   //  sqlAddColumnToAuthors,
   //  sqlCreateTablePlus,
   sqlInsertAuthors,
};
