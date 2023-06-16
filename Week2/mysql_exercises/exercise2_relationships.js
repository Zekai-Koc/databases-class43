const sqlCreateTable = `CREATE TABLE research_Papers (
  paper_id INT PRIMARY KEY,
  paper_title VARCHAR(255),
  conference VARCHAR(255),
  publish_date DATE,
  notes TEXT
 );`;

`CREATE TABLE research_papers (
  paper_id INT PRIMARY KEY,
  paper_title VARCHAR(255),
  conference VARCHAR(255),
  publish_date DATE,
  author_id INT,
  CONSTRAINT fk_author FOREIGN KEY (author_id) REFERENCES authors(author_id)
);`;
