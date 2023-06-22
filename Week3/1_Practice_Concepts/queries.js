use mongo_practice
show collections

// insert documents
db.movies.insertOne({title: 'Pulp Fiction', writer: 'Quentin Tarantino', year: 1994})
db.movies.insertOne({title: 'Inglorious Basterds', writer: 'Quentin Tarantino', year: 2009, actors: ['Brad Pitt', 'Diane Kruger', 'Eli Roth']})
db.movies.insertOne({title: 'The Hobbit: An Unexpected Journey', writer: 'J.R.R. Tolkein', year: 2012, franchise: 'The Hobbit'})
db.movies.insertOne({title: 'The Hobbit: The Battle of the Five Armies', writer: 'J.R.R. Tolkein', year: 2013, franchise: 'The Hobbit', synopsis: 'Bilbo and Company are forced to engage in a war against an array of combatants and keep the Lonely Mountain from falling into the hands of a rising darkness.'})
db.movies.insertOne({title: "Pee Wee Herman's Big Adventure"})
db.movies.insertOne({title: 'Avatar'})

// query documents
db.movies.find()
db.movies.find({writer: 'Quentin Tarantino'})
db.movies.find({actors: 'Brad Pitt'})
db.movies.find({franchise: 'The Hobbit'})
db.movies.find({year: {$gte: 1990, $lte: 1999} })
db.movies.find({$or: [{year: {$lt: 2000}}, { year: { $gt: 2010}}] })

// update documents
db.movies.updateOne({ _id: ObjectId('64940ae6e250f0a32ddaa53d')}, { $set: { synopsis: "A reluctant hobbit, Bilbo Baggins, sets out to the Lonely Mountain with a spirited group of dwarves to reclaim their mountain home - and the gold within it - from the dragon Smaug."}});
db.movies.updateOne({ title: "Fight Club"}, { $set: { synopsis: "A reluctant hobbit, Bilbo Baggins, sets out to the Lonely Mountain with a spirited group of dwarves to reclaim their mountain home - and the gold within it - from the dragon Smaug."}});
db.movies.updateOne({title: 'Pulp Fiction'}, {$set: { actor: 'Samuel L. Jackson'} } )
db.movies.updateOne({ title: 'The Hobbit: The Desolation of Smaug'}, { $set: { synopsis: "The dwarves, along with Bilbo Baggins and Gandalf the Grey, continue their quest to reclaim Erebor, their homeland, from Smaug. Bilbo Baggins is in possession of a mysterious and magical ring."}});

// text search
db.movies.find({ synopsis: /Bilbo/g})
db.movies.find({ synopsis: /Gandalf/g})
db.movies.find({ $and: [{ synopsis: /Bilbo/g }, { synopsis: { $not: /Gandalf/g } }] })
db.movies.find( {synopsis: /(dwarves|hobbit)/g} )
db.movies.find({ $or: [{ synopsis: /Bilbo/g }, { synopsis: /hobbit/g  }] }) 
db.movies.find({ $and: [{ synopsis: /gold/g }, { synopsis: /dragon/g }] })

// delete documents
db.movies.deleteOne({title: "Pee Wee Herman's Big Adventure"})
db.movies.deleteOne({title: "Avatar"})


// 
db.Users.drop()
db.createCollection("users");
show collections
db.users.insertMany([ {username: "GoodGuyGreg", first_name: "Good Guy", last_name: "Greg"}, { username: "ScumbagSteve", full_name: { first: "Scumbag", last: "Steve"} } ])


db.createCollection("posts")
db.posts.insertOne( { username: "GoodGuyGreg", title: "Passes out at party", body: "Wakes up early and cleans house" } )
db.posts.insertOne( { username: "GoodGuyGreg", title: "Steals your identity", body: "Raises your credit score" } )
db.posts.insertOne( { username: "GoodGuyGreg", title: "Reports a bug in your code", body: "Sends you a Pull Request" } )
db.posts.insertOne( { username: "ScumbagSteve", title: "Borrows something", body: "Sells it" } )
db.posts.insertOne( { username: "ScumbagSteve", title: "Borrows everything", body: "The end" } )
db.posts.insertOne( { username: "ScumbagSteve", title: "Forks your repo on github", body: "Sets to private" } )

db.createCollection("comments");
db.comments.insertOne( { username: "GoodGuyGreg", comment: "Hope you got a good deal!", post: ObjectId("649424c6e250f0a32ddaa54c") } )
db.comments.insertOne( { username: "GoodGuyGreg", comment: "What's mine is yours!", post: ObjectId("649424e1e250f0a32ddaa54d") } )
db.comments.insertOne( { username: "GoodGuyGreg", comment: "Don't violate the licensing agreement!", post: ObjectId("64942502e250f0a32ddaa54e") } )
db.comments.insertOne( { username: "ScumbagSteve", comment: "It still isn't clean", post: ObjectId("6494245ce250f0a32ddaa549") } )
db.comments.insertOne( { username: "ScumbagSteve", comment: "Denied your PR cause I found a hack", post: ObjectId("649424a5e250f0a32ddaa54b") } )

//
db.users.find();
db.posts.find();
db.posts.find({ username: "GoodGuyGreg" });
db.posts.find({ username: "ScumbagSteve" });
db.comments.find({})
db.comments.find({ username: "GoodGuyGreg"})
db.comments.find({ username: "ScumbagSteve"})
db.posts.aggregate([ {$match: { title: 'Reports a bug in your code' }},{$lookup: {from: 'comments',localField: '_id',foreignField: 'post',as: 'comments'}}])