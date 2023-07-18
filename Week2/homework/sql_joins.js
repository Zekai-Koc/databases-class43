const sqlAuthorsMentors = `
   SELECT a.author_name, m.mentor_name from authors a
   JOIN mentors m 
   ON a.mentor_id = m.mentor_id;
`;

const sqlAuthorsPapers = `
   SELECT a.author_id, a.author_name, a.university, a.date_of_birth, a.h_index, a.gender, p.paper_title
   FROM authors a
   LEFT JOIN authors_papers ap ON a.author_id = ap.author_id
   LEFT JOIN research_papers p ON ap.paper_id = p.paper_id;
;`;

module.exports = {
   sqlAuthorsMentors,
   sqlAuthorsPapers,
};
