var express = require('express');
var router = express.Router();
const Validator = require('fastest-validator')

// const {User} = require('../models');

const v = new Validator();

router.post('/a', async (req, res) => {
  return res
  .status(200)
  .json({
    code:"200",
    message: "success"
  });
});

module.exports = router;