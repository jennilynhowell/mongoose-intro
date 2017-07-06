const express = require('express');
const mongoose = require('mongoose');
const Recipe = require('./models/recipe');
const mustacheExpress = require('mustache-express');
const recipeController = require('./controllers/recipe-controller');

const app = express();
app.engine('mustache', mustacheExpress());
app.set('view engine', 'mustache');
app.set('views', './views');

mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://localhost:27017/mongoosestore');



app.get('/', recipeController.list);

app.listen(3000);
