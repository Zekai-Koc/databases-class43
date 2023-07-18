const sqlCreateTableAuthors = `
      CREATE TABLE IF NOT EXISTS authors 
      (
         author_id INT AUTO_INCREMENT PRIMARY KEY,
         author_name VARCHAR(255),
         university VARCHAR(255),
         date_of_birth DATE,
         h_index INT,
         gender ENUM('Male', 'Female')
      );`;

const sqlAddColumnAuthors = `
   ALTER TABLE authors
   ADD COLUMN mentor_id INT,
   ADD CONSTRAINT fk_mentor
   FOREIGN KEY (mentor_id) REFERENCES mentors(mentor_id)
;`;

const sqlInsertAuthors = `
   INSERT INTO authors (author_name, university, date_of_birth, h_index, gender, mentor_id) VALUES
      ('John Smith', 'Massachusetts Institute of Technology', '1985-07-12', 18, 'Male', 2),
      ('Emily Johnson', 'Stanford University', '1990-02-28', 12, 'Female', 1),
      ('Michael Davis', 'Harvard University', '1988-09-15', 15, 'Male', 4),
      ('Sarah Thompson', 'University of California, Berkeley', '1992-11-05', 10, 'Female', 3),
      ('David Anderson', 'California Institute of Technology', '1987-04-20', 20, 'Male', 6),
      ('Jessica Brown', 'Princeton University', '1991-06-18', 14, 'Female', 5),
      ('Daniel Wilson', 'University of Oxford', '1989-03-24', 16, 'Male', 8),
      ('Sophia Miller', 'University of Cambridge', '1993-09-02', 9, 'Female', 7),
      ('Ethan Clark', 'ETH Zurich', '1986-11-14', 13, 'Male', 2),
      ('Olivia Davis', 'University of Chicago', '1994-08-09', 11, 'Female', 3),
      ('James Taylor', 'Columbia University', '1987-12-30', 17, 'Male', 3),
      ('Ava Wilson', 'University of Toronto', '1990-04-06', 8, 'Female', 12),
      ('Logan Anderson', 'University of Tokyo', '1988-10-25', 19, 'Male', 11),
      ('Emma Brown', 'Imperial College London', '1992-02-15', 12, 'Female', 15),
      ('Mason Johnson', 'University of Melbourne', '1989-05-21', 15, 'Male', 3),
      ('Noah Thompson', 'University of California, Berkeley', '1991-08-14', 13, 'Male', 12),
      ('Samantha Wilson', 'Stanford University', '1988-02-27', 16, 'Female', 9),
      ('William Davis', 'Harvard University', '1993-09-10', 11, 'Male', 13),
      ('Sophia Johnson', 'Massachusetts Institute of Technology', '1986-12-05', 18, 'Female', 14),
      ('Ethan Smith', 'California Institute of Technology', '1990-05-30', 14, 'Male', 5),
      ('Emma Taylor', 'University of Oxford', '1987-10-19', 17, 'Female', 6),
      ('Michael Anderson', 'University of Cambridge', '1992-03-09', 9, 'Male', 7),
      ('Olivia Miller', 'ETH Zurich', '1989-06-26', 15, 'Female', 1),
      ('Daniel Brown', 'University of Chicago', '1991-12-11', 12, 'Male', 9),
      ('Ava Johnson', 'Columbia University', '1988-04-28', 20, 'Female', 2)
   ; `;

module.exports = {
   sqlCreateTableAuthors,
   sqlAddColumnAuthors,
   sqlInsertAuthors,
};
