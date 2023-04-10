var express = require('express');
var router = express.Router();
const Validator = require('fastest-validator')

const {User_voucher} = require('../models');
const {User} = require('../models');
const {Voucher} = require('../models');
const {Product_category} = require('../models');

const v = new Validator();

router.post('/', async (req, res) => {
  const schema = {
    user_id: 'string|numeric',
    category_id: 'string|numeric'
  }

  const validate = v.validate(req.body, schema);

  if(validate.length){
    return res
    .status(400)
    .json(validate);
  }
  // const uVouchers = await User_voucher.findAll({ 
  //   include: { all: true, nested: true }
  // });

  const uVouchers = await User_voucher.findAll({ 
    include: [
      {
        model: User
      }
    ]
  });
  

  return res
  .status(200)
  .json({
    code:"200",
    message: "voucher list success",
    data: uVouchers
  });
});

router.post('/category', async (req, res) => {
  return res
  .status(200)
  .json({
    code:"200",
    message: "success"
  });
});

module.exports = router;