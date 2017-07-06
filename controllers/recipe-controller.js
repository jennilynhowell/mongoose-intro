const Recipe = require('../models/recipe');

module.exports = {
  list: function (req, res){
    Recipe.find().then(result =>{
      console.log(result);
    });
    res.render('recipe/list', {})
  },
};
