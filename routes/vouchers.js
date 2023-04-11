var express = require('express');
var router = express.Router();
const Validator = require('fastest-validator')

const {User_voucher} = require('../models');
const {User} = require('../models');
const {Voucher} = require('../models');
const {Product_category} = require('../models');
const {Cart} = require('../models');

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

  const uVouchers = await User_voucher.findAll({ 
    where: {
      user_id: req.body.user_id,
      category_id: req.body.category_id
    },
    include: [
      {
        model: User
      },
      {
        model: Voucher
      },
      {
        model: Product_category
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

router.post('/add-voucher/:user_id/:product_id', async (req, res) => {
  const schema = {
    voucher_code: 'string',
    voucher_name: 'string'
  }

  const validate = v.validate(req.body, schema);

  if(validate.length){
    return res
    .status(400)
    .json(validate);
  }

  const removeVoucher = await Cart.update(
    {
      voucher_code: req.body.voucher_code,
      voucher_name: req.body.voucher_name
    },{
      where: {
        user_id: req.params.user_id,
        product_id: req.params.product_id
      }
    }
  );

  return res
  .status(200)
  .json({
    code:"200",
    message: "Voucher successfuly added"
  });
});

router.post('/remove-voucher/:user_id/:product_id', async (req, res) => {
  const schema = {
    voucher_code: 'string',
    voucher_name: 'string'
  }

  const validate = v.validate(req.body, schema);

  // if(validate.length){
  //   return res
  //   .status(400)
  //   .json(validate);
  // }

  const removeVoucher = await Cart.update(
    {
      voucher_code: req.body.voucher_code,
      voucher_name: req.body.voucher_name
    },{
      where: {
        user_id: req.params.user_id,
        product_id: req.params.product_id
      }
    }
  );

  return res
  .status(200)
  .json({
    code:"200",
    message: "Voucher successfuly removed"
  });
});

module.exports = router;