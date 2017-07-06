const mongoose = require('mongoose');
const Recipe = require('./models/recipe');

mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://localhost/27017/mongoosestore');

const newRecipe = new Recipe({name: 'Salad'});

console.log(newRecipe.toObject());
