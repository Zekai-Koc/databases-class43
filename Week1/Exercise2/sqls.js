module.exports = [
   {
      question: `What are the names of countries with population greater than 8 million?`,
      sql: `select  name from country c where Population > 8000000;`,
   },
   {
      question: `What are the names of countries that have “land” in their names?`,
      sql: `select  name from country c where name like '%land%';`,
   },
   {
      question: `What are the names of the cities with population in between 500,000 and 1 million?`,
      sql: `select name from city c where Population between 500000 and 1000000;`,
   },
   {
      question: `What's the name of all the countries on the continent ‘Europe’?`,
      sql: `select name from country c where Continent = 'Europe';`,
   },
   {
      question: `List all the countries in the descending order of their surface areas.`,
      sql: `select * from country c order by SurfaceArea desc;`,
   },
   {
      question: `What are the names of all the cities in the Netherlands?`,
      sql: `select name from city c where CountryCode = 'NLD';`,
   },
   {
      question: `What is the population of Rotterdam?`,
      sql: `select population from city c where Name = 'Rotterdam';`,
   },
   {
      question: `What's the top 10 countries by Surface Area?`,
      sql: `select * from country c order by SurfaceArea desc limit 10;`,
   },
   {
      question: `What's the top 10 most populated cities?`,
      sql: `select name from city c order by Population desc limit 10;`,
   },
   {
      question: `What is the population number of the world?`,
      sql: `select sum(Population) from country c;`,
   },
];
