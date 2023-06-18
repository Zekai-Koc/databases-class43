import { createDB } from "./createdb.js";
import { createTable } from "./createtable.js";
import { seedTable } from "./seedtable.js";
import {
   sqlCreateDB,
   tableRecipe,
   tableCategory,
   tableIngredient,
   tableDifficulty,
   tableMethod,
   tableRecipeCategory,
   test1,
   test2,
   test3,
   test4,
   test5,
   test6,
   test7,
   test8,
   test9,
   test10,
   test11,
   test12,
   test13,
   test14,
   test15,
   test16,
   test17,
   test18,
   test19,
   test20,
} from "./dbObjects.js";

async function createEnv() {
   // await createDB(sqlCreateDB);
   // await createTable(tableDifficulty);
   // await createTable(tableCategory);
   // await createTable(tableIngredient);
   // await createTable(tableMethod);
   // await createTable(tableRecipe);
   // await createTable(tableRecipeCategory);
   // await seedTable(tableCategory);
   // await seedTable(tableDifficulty);
   // await seedTable(tableMethod);
   // await seedTable(tableIngredient);
   // await seedTable(tableRecipe);
   // await seedTable(tableRecipeCategory);
   // await seedTable(test1);
   // await seedTable(test2);
   // await seedTable(test3);
   // await seedTable(test4);
   // await seedTable(test5);
   // await seedTable(test6);
   // await seedTable(test7);
   // await seedTable(test8);
   // await seedTable(test9);
   // await seedTable(test10);
   // await seedTable(test11);
   // await seedTable(test12);
   // await seedTable(test13);
   // await seedTable(test14);
   // await seedTable(test15);
   // await seedTable(test16);
   await seedTable(test17);
   await seedTable(test18);
   await seedTable(test19);
   await seedTable(test20);
}

createEnv();
