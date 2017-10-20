var express = require('express');
var router = express.Router();
var Article = require('../models/article');
/* GET home page. */
router.get('/', function(req, res, next) {
  Article.find({}, (err, articles) => {
    console.log(articles);
    res.render('index', { title: 'Express', articles: articles  });
  })
  
});

module.exports = router;
