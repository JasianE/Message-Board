var express = require('express');
var router = express.Router();

const messages = [
  {
    text: 'Drek Jeter',
    user: 'Ama',
    added: new Date()
  },
  {
    text: 'BR',
    user: 'DErk Viedegamunkey',
    added: new Date()
  }
]

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mini Message Board', messages: messages });
});
router.get('/new', function(req, res, next){
  res.render('form')
})
router.post('/new', function(req, res){
  const message = {
    text: req.body.message,
    user: req.body.author,
    added: new Date()
  }
  messages.push(message)
  res.redirect('/')
})
module.exports = router;
