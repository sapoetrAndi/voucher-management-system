var express = require('express');
var router = express.Router();
const Validator = require('fastest-validator')

const {User} = require('../models');
const {Cart} = require('../models');
const {Product_category} = require('../models');
const {Product} = require('../models');
const {Voucher} = require('../models');

const v = new Validator();

router.post('/add-to-cart', async (req, res) => {
  const schema = {
    voucher_code: 'string|optional',
    voucher_name: 'string|optional',
    category_id: 'string',
    user_id: 'string',
    product_id: 'string',
    quantity: 'number',
    price: 'number',
  }

  const validate = v.validate(req.body, schema);

  if(validate.length){
    return res
    .status(400)
    .json(validate);
  }

  const save = await Cart.create(req.body);

  return res
  .status(200)
  .json({
    code:"200",
    message: "success"
  });
});

router.post('/remove-from-cart', async (req, res) => {
  const schema = {
    voucher_code: 'string',
    user_id: 'string'
  }

  const validate = v.validate(req.body, schema);

  if(validate.length){
    return res
    .status(400)
    .json(validate);
  }

  const save = await Cart.destroy({
    where: {
      voucher_code: req.body.voucher_code,
      user_id: req.body.user_id
    }
  });

  return res
  .status(200)
  .json({
    code:"200",
    message: "success"
  });
});

router.get('/user-cart/:user_id', async (req, res) => {
  const cart = await Cart.findAll(
    { 
      where: { 
        user_id: req.params.user_id 
      },
      include: [
        {
          model: User
        },
        {
          model: Product_category
        },
        {
          model: Product
        },
        {
          model: Voucher
        }
      ]
    });

  return res
  .status(200)
  .json({
    code:"200",
    message: "success",
    data: cart
  });
});

module.exports = router;