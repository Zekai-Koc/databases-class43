const sqlAuthorsMentors = `select a.author_name, m.mentor_name from authors a
join mentors m 
on a.mentor_id = m.mentor_id;`;

const sqlAuthorsPapers = `select a.author_name , rp.paper_title  from authors a 
left join research_papers rp 
on rp.author_id = a.author_id;`;

module.exports = {
   sqlAuthorsMentors,
   sqlAuthorsPapers,
};
