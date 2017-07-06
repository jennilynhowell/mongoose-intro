const mongoose = require('mongoose');
const Recipe = require('./models/recipe');

mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://localhost/27017/mongoosestore');

// const newRecipe = new Recipe({name: 'Salad'});
// const ingredient = {amount: 5, name: 'cherry tomatoes'};
// newRecipe.ingredients.push(ingredient);
// newRecipe.save(); //sends it to the database
// console.log(newRecipe.toObject());

// //use this in your app.get
// Recipe.find({}).then(results => {
//   console.log(results);
//   //res.render...
// });
//
// //remember this will return an object and you can use dot notation on it
// Recipe.findOne({name: 'Salad'}).then(result => {
//   console.log(result);
// });

//updateone: the verbose way
Recipe.findOne({name: 'Salad'}).then(result => {
  const ingredient = {name: 'cucumbers', amount: 1};
  result.ingredients.push(ingredient);
  result.save();
});

//updateone: betterway
Recipe.updateOne({name: 'Salad'},
  {
    $push: {
      ingredients: {name: 'olives', amount: 3}
    }
  }
);
