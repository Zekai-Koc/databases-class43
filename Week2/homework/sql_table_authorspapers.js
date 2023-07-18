const sqlCreateTableAuthorsPapers = `
   CREATE TABLE IF NOT EXISTS authors_papers( 
      author_id int,  
      paper_id int, 
      primary key (author_id, paper_id), 
      foreign key (author_id) references authors(author_id), 
      foreign key (paper_id) references research_papers(paper_id)
   );`;

const sqlInsertAuthorsPapers = `
   INSERT INTO authors_papers (author_id, paper_id) VALUES
      (1, 1),
      (2, 1),
      (3, 2),
      (4, 2),
      (5, 3),
      (6, 3),
      (7, 4),
      (8, 4),
      (9, 5),
      (10, 5),
      (11, 6),
      (12, 6),
      (13, 7),
      (14, 7),
      (15, 8),
      (16, 8),
      (17, 9),
      (18, 9),
      (19, 10),
      (20, 10),
      (21, 11),
      (22, 11),
      (3, 13),
      (3, 14),
      (4, 14),
      (4, 15),
      (7, 15),
      (8, 16),
      (9, 16),
      (9, 17),
      (8, 17),
      (8, 18),
      (11, 18),
      (11, 19),
      (6, 19),
      (16, 20),
      (5, 20),
      (7, 21),
      (8, 21),
      (1, 22),
      (13, 22),
      (2, 23),
      (16, 23)
`;

module.exports = {
   sqlCreateTableAuthorsPapers,
   sqlInsertAuthorsPapers,
};
