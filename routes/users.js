var express = require('express');
var router = express.Router();

const users = [];

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send(users);
});

/* GET user by id. */
router.get('/:id', function (req, res, next) {
  res.send(users[req.params.id]);
});

/* POST new user. */
router.post('/', function (req, res, next) {
  const id = users.length;
  user = { id: id, ...req.body };
  users.push(user);
  res.send(user);
});

module.exports = router;
