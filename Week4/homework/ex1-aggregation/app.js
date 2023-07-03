const { MongoClient } = require("mongodb");

const url = "mongodb://localhost:27017";
const client = new MongoClient(url);
const dbName = "databaseWeek4";

async function main() {
   await client.connect();
   console.log("Connected successfully to server");
   const db = client.db(dbName);
   const collection = db.collection("population_pyramid_of_countries");

   /* Task: Write a function that will return the array of the total population (M + F over all age groups) for a given Country per year.*/
   const countryName = "Netherlands";
   let result = await getPopulationByYear(collection, countryName);
   console.log(`Population Stats for ${countryName}: `, result);

   /* Task: Write a function that will return all the information of each continent for a given Year and Age field but add a new field TotalPopulation that will be the addition of M and F. */
   const year = 2020;
   const age = "100+";
   const continents = [
      "AFRICA",
      "ASIA",
      "EUROPE",
      "LATIN AMERICA AND THE CARIBBEAN",
      "NORTHERN AMERICA",
      "OCEANIA",
   ];
   result = await getContinentInfoByYearAndAge(
      collection,
      continents,
      year,
      age
   );
   console.log(result);

   return "\n-------------- \n Finished... \n--------------";
}

const getContinentInfoByYearAndAge = (collection, continents, year, age) => {
   return collection
      .aggregate([
         {
            $match: {
               Year: year,
               Age: age,
               Country: { $in: continents },
            },
         },
         {
            $addFields: {
               TotalPopulation: {
                  $add: ["$M", "$F"],
               },
            },
         },
      ])
      .toArray();
};

const getPopulationByYear = (collection, country) => {
   return collection
      .aggregate([
         {
            $match: {
               Country: country,
            },
         },
         {
            $group: {
               _id: "$Year",
               countPopulation: {
                  $sum: { $add: ["$M", "$F"] },
               },
            },
         },
         {
            $sort: {
               _id: 1,
            },
         },
      ])
      .toArray();
};

main()
   .then(console.log)
   .catch(console.error)
   .finally(() => client.close());
