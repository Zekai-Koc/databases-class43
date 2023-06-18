export const sqlCreateDB = {
   databaseName: "hyf_prep_exercise",
   create: `CREATE DATABASE IF NOT EXISTS hyf_prep_exercise`,
};

export const tableRecipe = {
   tableName: "recipe",
   create: `CREATE TABLE IF NOT EXISTS recipe (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      category_id INT,
      ingredient_id INT,
      method_id INT,
      prep_time INT,
      cook_time INT,
      total_time INT AS (prep_time + cook_time) STORED,
      serving INT,
      notes TEXT,
      FOREIGN KEY (ingredient_id) REFERENCES ingredient(id),
      FOREIGN KEY (method_id) REFERENCES method(id)
    );`,
   insert: `INSERT INTO recipe (name, category_id, ingredient_id, method_id, prep_time, cook_time, serving, notes)
   VALUES
     ('Pasta Carbonara', 18, 12, 16, 10, 20, 4, 'Serve hot with grated Parmesan cheese'),
     ('Vegetable Stir-Fry', 20, 7, 19, 15, 12, 2, 'Add soy sauce according to taste'),
     ('Classic Pancakes', 10, 17, 10, 5, 15, 2, 'Top with maple syrup and fresh berries'),
     ('Grilled Salmon', 14, 13, 18, 10, 15, 2, 'Brush with lemon butter while grilling'),
     ('Tomato Soup', 16, 10, 21, 5, 25, 4, 'Garnish with fresh basil leaves'),
     ('Homemade Pizza', 11, 16, 14, 30, 20, 4, 'Customize with your favorite toppings'),
     ('Chicken Curry', 19, 20, 15, 20, 30, 4, 'Serve with steamed rice'),
     ('Chocolate Brownies', 13, 18, 11, 15, 25, 8, 'Sprinkle with powdered sugar before serving');
   `,
};

export const tableCategory = {
   tableName: "category",
   create: `CREATE TABLE IF NOT EXISTS category (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(255) NOT NULL
    );`,
   insert: `INSERT INTO category (name)
   VALUES
     ('Cake'),
     ('No-Bake'),
     ('Vegetarian'),
     ('Vegan'),
     ('Gluten-Free'),
     ('Japanese'),
     ('Italian'),
     ('Mexican'),
     ('Breakfast'),
     ('Homemade'),
     ('Fast Food'),
     ('Salads'),
     ('Desserts'),
     ('Seafood'),
     ('Grilling'),
     ('Soup'),
     ('Bakery'),
     ('Pasta'),
     ('Vegetable'),
     ('Chicken')`,
};

export const tableIngredient = {
   tableName: "ingredient",
   create: `CREATE TABLE IF NOT EXISTS ingredient (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(50),
      amount VARCHAR(50)
    );`,
   insert: `INSERT INTO ingredient (name, amount)
   VALUES
     ('Condensed milk', '100ml'),
     ('Cream Cheese', '200g'),
     ('Lemon Juice', '1 tbsp'),
     ('Pie Crust', '1'),
     ('Cherry Jam', '2 tbsp'),
     ('Brussels Sprouts', '500g'),
     ('Lemon juice', '2 tbsp'),
     ('Sesame seeds', '1 tbsp'),
     ('Pepper', '1 tsp'),
     ('Salt', '1 tsp'),
     ('Olive oil', '2 tbsp'),
     ('Macaroni', '200g'),
     ('Butter', '50g'),
     ('Flour', '2 tbsp'),
     ('Salt', '1 tsp'),
     ('Pepper', '1 tsp'),
     ('Milk', '250ml'),
     ('Shredded Cheddar cheese', '100g'),
     ('Eggs', '4'),
     ('Soy sauce', '2 tbsp'),
     ('Sugar', '1 tbsp'),
     ('Salt', '1 tsp'),
     ('Olive Oil', '2 tbsp');`,
};

export const tableDifficulty = {
   tableName: "difficulty",
   create: `CREATE TABLE IF NOT EXISTS difficulty (
      id INT AUTO_INCREMENT PRIMARY KEY,
      level VARCHAR(50) NOT NULL
    );`,
   insert: `INSERT INTO difficulty (level)
   VALUES
     ('Easy'),
     ('Intermediate'),
     ('Advanced'),
     ('Expert');`,
};

export const tableMethod = {
   tableName: "method",
   create: `CREATE TABLE IF NOT EXISTS method (
      id INT AUTO_INCREMENT PRIMARY KEY,
      step VARCHAR(50),
      difficulty_id INT,
      FOREIGN KEY (difficulty_id) REFERENCES difficulty(id)
    );`,
   insert: `INSERT INTO method (step, difficulty_id)
   VALUES
     ('Beat Cream Cheese', 3),
     ('Add condensed Milk and blend', 2),
     ('Add Lemon Juice and blend', 4),
     ('Add the mix to the pie crust', 1),
     ('Spread the Cherry Jam', 2),
     ('Place in refrigerator for 3h.', 3),
     ('Preheat the oven', 4),
     ('Mix the ingredients in a bowl', 1),
     ('Spread the mix on baking sheet', 2),
     ('Bake for 30 mins.', 3),
     ('Cook Macaroni for 8 mins.', 1),
     ('Melt butter in a saucepan', 2),
     ('Add flour, salt, pepper and mix', 4),
     ('Add Milk and mix', 1),
     ('Cook until mix is smooth', 2),
     ('Add cheddar cheese', 3),
     ('Add the macaroni', 4),
     ('Beat the eggs', 1),
     ('Add soya sauce, sugar and salt', 2),
     ('Add oil to a sauce pan', 3),
     ('Bring to medium heat', 4),
     ('Add some mix to the sauce pan', 1),
     ('Let is cook for 1 min.', 2),
     ('Remove pan from fire', 3);`,
};

export const tableRecipeCategory = {
   tableName: "recipe_category",
   create: `CREATE TABLE IF NOT EXISTS recipe_category (
      recipe_id INT,
      category_id INT,
      PRIMARY KEY (recipe_id, category_id),
      FOREIGN KEY (recipe_id) REFERENCES recipe(id),
      FOREIGN KEY (category_id) REFERENCES category(id)
    );`,
   insert: `INSERT INTO recipe_category (recipe_id, category_id)
   VALUES
     (1, 1),
     (1, 2),
     (1, 3),
     (2, 17),
     (2, 20),
     (3, 10),
     (4, 14),
     (4, 18),
     (5, 16),
     (6, 11),
     (7, 19),
     (7, 20),
     (8, 13);`,
};

export const test1 = {
   tableName: "test1",
   create: ``,
   insert: `INSERT INTO recipe_category (recipe_id, category_id) VALUES (2, 14), (2, 15);`,
};

export const test2 = {
   tableName: "test2",
   create: ``,
   insert: `INSERT INTO ingredient (name, amount) VALUES ('Brussels Sprouts', '500g'), ('Lemon juice', '2 tbsp'), ('Sesame seeds', '1 tbsp'), ('Pepper', '1 tsp'), ('Salt', '1 tsp'), ('Olive oil', '2 tbsp');`,
};

export const test3 = {
   tableName: "test3",
   create: ``,
   insert: `INSERT INTO method (step, difficulty_id) VALUES ('Preheat the oven', 2), ('Mix the ingredients in a bowl', 3), ('Spread the mix on baking sheet', 2), ('Bake for 30 mins', 4);`,
};

export const test4 = {
   tableName: "test4",
   create: ``,
   insert: `INSERT INTO recipe_category (recipe_id, category_id) VALUES (2, 4), (2, 5);`,
};

export const test5 = {
   tableName: "test1",
   create: ``,
   insert: `INSERT INTO category (name)
   VALUES ('Cake'), ('No-Bake'), ('Vegetarian');`,
};

export const test6 = {
   tableName: "test2",
   create: ``,
   insert: `INSERT INTO ingredient (name, amount)
   VALUES
       ('Condensed milk', '100ml'),
       ('Cream Cheese', '200g'),
       ('Lemon Juice', '1 tbsp'),
       ('Pie Crust', '1'),
       ('Cherry Jam', '2 tbsp');`,
};

export const test7 = {
   tableName: "test3",
   create: ``,
   insert: `INSERT INTO method (step, difficulty_id)
   VALUES
       ('Beat Cream Cheese', 1),
       ('Add condensed Milk and blend', 2),
       ('Add Lemon Juice and blend', 1),
       ('Add the mix to the pie crust', 2),
       ('Spread the Cherry Jam', 1),
       ('Place in refrigerator for 3h', 2);`,
};

export const test8 = {
   tableName: "test4",
   create: ``,
   insert: `INSERT INTO recipe (name, category_id, ingredient_id, method_id, prep_time, cook_time, serving, notes)
   VALUES ('No-Bake Cheesecake', 1, 1, 1, 0, 0, 0, '');
   `,
};

///////////////

export const test9 = {
   tableName: "test1",
   create: ``,
   insert: `INSERT INTO category (name)
   VALUES ('Vegan'), ('Gluten-Free');
   `,
};

export const test10 = {
   tableName: "test2",
   create: ``,
   insert: `INSERT INTO ingredient (name, amount)
   VALUES
       ('Brussels Sprouts', ''),
       ('Lemon juice', ''),
       ('Sesame seeds', ''),
       ('Pepper', ''),
       ('Salt', ''),
       ('Olive oil', '');
   `,
};

export const test11 = {
   tableName: "test3",
   create: ``,
   insert: `INSERT INTO method (step, difficulty_id)
   VALUES
       ('Preheat the oven', 1),
       ('Mix the ingredients in a bowl', 2),
       ('Spread the mix on baking sheet', 3),
       ('Bake for 30 minutes', 1);
   `,
};

export const test12 = {
   tableName: "test4",
   create: ``,
   insert: `INSERT INTO recipe (name, category_id, ingredient_id, method_id, prep_time, cook_time, serving, notes)
   VALUES ('Roasted Brussels Sprouts', 2, 7, 6, 0, 0, 0, '');
   
   `,
};

////////////////

export const test13 = {
   tableName: "test1",
   create: ``,
   insert: `
   INSERT INTO category (name)
VALUES ('Vegetarian');
   `,
};

export const test14 = {
   tableName: "test2",
   create: ``,
   insert: `
   INSERT INTO ingredient (name, amount)
   VALUES
       ('Macaroni', ''),
       ('Butter', ''),
       ('Flour', ''),
       ('Salt', ''),
       ('Pepper', ''),
       ('Milk', ''),
       ('Shredded Cheddar cheese', '');   
   `,
};

export const test15 = {
   tableName: "test3",
   create: ``,
   insert: `
   INSERT INTO method (step, difficulty_id)
VALUES
    ('Cook Macaroni for 8 minutes', 1),
    ('Melt butter in a saucepan', 2),
    ('Add flour, salt, pepper and mix', 3),
    ('Add Milk and mix', 1),
    ('Cook until mix is smooth', 2),
    ('Add cheddar cheese', 3),
    ('Add the macaroni', 4);
   `,
};

export const test16 = {
   tableName: "test4",
   create: ``,
   insert: `
   INSERT INTO recipe (name, category_id, ingredient_id, method_id, prep_time, cook_time, serving, notes)
VALUES ('Mac & Cheese', 3, 12, 13, 0, 0, 0, '');
   `,
};

/////////////////

export const test17 = {
   tableName: "test1",
   create: ``,
   insert: `
   INSERT INTO category (name)
VALUES ('Vegetarian'), ('Japanese');
   `,
};

export const test18 = {
   tableName: "test2",
   create: ``,
   insert: `
   INSERT INTO ingredient (name, amount)
   VALUES
       ('Eggs', ''),
       ('Soy sauce', ''),
       ('Sugar', ''),
       ('Salt', ''),
       ('Olive Oil', '');     
   `,
};

export const test19 = {
   tableName: "test3",
   create: ``,
   insert: `
   INSERT INTO method (step, difficulty_id)
   VALUES
       ('Beat the eggs', 1),
       ('Add soya sauce, sugar and salt', 2),
       ('Add oil to a sauce pan', 3),
       ('Bring to medium heat', 4),
       ('Add some mix to the sauce pan', 1),
       ('Let it cook for 1 minute', 2),
       ('Add oil to a sauce pan', 3),
       ('Add some mix to the sauce pan', 4),
       ('Let it cook for 1 minute', 1),
       ('Remove pan from fire', 2);   
   `,
};

export const test20 = {
   tableName: "test4",
   create: ``,
   insert: `
   INSERT INTO recipe (name, category_id, ingredient_id, method_id, prep_time, cook_time, serving, notes)
   VALUES ('Tamagoyaki Japanese Omelette', 9, 19, 20, 0, 0, 0, '');   
   `,
};
