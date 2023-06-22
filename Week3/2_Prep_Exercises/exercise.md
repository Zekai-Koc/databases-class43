# Questions and Answers:

---

### Question: Was your database already in 2NF / 3 NF?

### Answer: No, it was not.

---

### Question: What changes did you have to do to normalize your database?

### Answer: Following changes have been made:

-  **Difficulty** was a field in the `method` table as a FK. I deleted **difficulty** from `method` table and add it as a new column in `recipe` table. I created "one-to-one" relationship between `recipe` and `difficulty` tables.

-  I had a column named **total_time** which is calculated by summing **prep_time** and **cook_time**. I deleted **total_time** column from `recipe` table.

-  I changed the relationship type from "one to many" to "many to many" between `category` and `recipe` tables. So i created a new junction table named `Recipe_Category`.

-  I changed the relationship type from "one to many" to "many to many" between `ingredient` and `recipe` tables. So i created a new junction table named `Recipe_Ingredient`.

-  I changed the relationship type from "one to many" to "many to many" between `method` and `recipe` tables. So i created a new junction table named `Recipe_Mehtod`.

---

### Question: If you want to add thousands of recipes to your database, what challenges do you foresee?

### Answer: Actually, there are not too many tables in my database. So, it will not too difficult to add new recipes to it. However, ==following concerns== are still exist.

-  Because there are three junction tables, i should be very careful to create the Foreign Keys accordingly.

-  The creation order of the tables and insert order of the data becomes important.

-  A reverse order should be followed while creating the tables and rows. For example, first we should create the `difficulty` table and insert difficulty grades before adding them to `recipe` table.

-  Similarly, before creating the respective rows for `category`, `ingredint`, and `method` i should not create the row(s) in the `recipe` table.
