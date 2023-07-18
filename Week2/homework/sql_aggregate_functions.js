const sqlAggregate1 = `
   SELECT rp.paper_id, rp.paper_title, COUNT(ap.author_id) AS num_authors
   FROM research_papers rp
   LEFT JOIN authors_papers ap ON rp.paper_id = ap.paper_id
   GROUP BY rp.paper_id, rp.paper_title;
`;

const sqlAggregate2 = `
   SELECT COUNT(DISTINCT ap.paper_id) AS sum_research_papers
   FROM authors a
   JOIN authors_papers ap ON a.author_id = ap.author_id
   WHERE a.gender = 'Female';
`;

const sqlAggregate3 = `
   SELECT university, AVG(h_index) AS average_h_index
   FROM authors
   GROUP BY university;
`;

const sqlAggregate4 = `
   SELECT a.university, COUNT(DISTINCT ap.paper_id) AS sum_research_papers
   FROM authors a
   JOIN authors_papers ap ON a.author_id = ap.author_id
   GROUP BY a.university;
`;

const sqlAggregate5 = `
   SELECT university, MIN(h_index) AS min_h_index, MAX(h_index) AS max_h_index
   FROM authors
   GROUP BY university;
`;

module.exports = {
   sqlAggregate1,
   sqlAggregate2,
   sqlAggregate3,
   sqlAggregate4,
   sqlAggregate5,
};
