const { MongoClient } = require("mongodb");

// Connection URL
const url = "mongodb://localhost:27017";

const client = new MongoClient(url);

// Database Name
const dbName = "databaseWeek4";

async function main() {
   await client.connect();
   console.log("Connected successfully to server");
   const db = client.db(dbName);
   const collection = db.collection("population_pyramid_of_countries");

   const countryName = "Netherlands";
   let result = await getPopulationByYear(collection, countryName);
   console.log(`Population Stats for ${countryName}: `, result);

   const year = 2020;
   const age = "100+";

   result = await getContinentInfoByYearAndAge(collection, year, age);
   console.log(result);

   return "done.";
}

const getContinentInfoByYearAndAge = (collection, year, age) => {
   const continents = [
      "AFRICA",
      "ASIA",
      "EUROPE",
      "LATIN AMERICA AND THE CARIBBEAN",
      "NORTHERN AMERICA",
      "OCEANIA",
   ];
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
         {
            $group: {
               _id: "$Country",
               Year: { $first: "$Year" },
               Age: { $first: "$Age" },
               M: { $first: "$M" },
               F: { $first: "$F" },
               TotalPopulation: { $first: "$TotalPopulation" },
            },
         },
         {
            $project: {
               _id: 0,
               Country: "$_id",
               Year: 1,
               Age: 1,
               M: 1,
               F: 1,
               TotalPopulation: 1,
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

// Unsuccessfull tries...
const getContinentInfoByYearAndAge__ = (collection, year, age) => {
   return collection
      .aggregate([
         {
            $match: {
               Year: year,
               Age: age,
            },
         },
         {
            $addFields: {
               TotalPopulation: {
                  $add: ["$M", "$F"],
               },
            },
         },
         {
            $group: {
               _id: "AFRICA",
               Year: { $first: "$Year" },
               Age: { $first: "$Age" },
               M: { $first: "$M" },
               F: { $first: "$F" },
               TotalPopulation: { $first: "$TotalPopulation" },
            },
         },
         {
            $project: {
               _id: 0,
               Country: "$_id",
               Year: 1,
               Age: 1,
               M: 1,
               F: 1,
               TotalPopulation: 1,
            },
         },
      ])
      .toArray();
};

const getContinentInfoByYearAndAge_ = (collection, year, age) => {
   return collection
      .aggregate([
         {
            $match: {
               Year: year,
               Age: age,
            },
         },
         {
            $group: {
               _id: "$Country",
               $addFields: {
                  TotalPopulation: { $sum: { $add: ["$M", "$F"] } },
               },
            },
         },
      ])
      .toArray();
};

const getContinentInfo = async (collection) => {
   const continents = [
      "AFRICA",
      "ASIA",
      "EUROPE",
      "LATIN AMERICA AND THE CARIBBEAN",
      "NORTHERN AMERICA",
      "OCEANIA",
   ];
   const result = [];

   for (let i = 0; i < continents.length; i++) {
      result.push(
         await collection
            .aggregate([
               {
                  $unwind: "$Year",
               },
               {
                  $match: {
                     Country: continents[i],
                  },
               },
               {
                  $group: {
                     _id: "$Country",
                     TotalPopulation: {
                        $sum: { $add: ["$M", "$F"] },
                     },
                  },
               },
            ])
            .toArray()
      );
   }

   return result;
};
