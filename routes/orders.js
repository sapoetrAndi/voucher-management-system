var express = require('express');
var router = express.Router();
const Validator = require('fastest-validator')

const {Order} = require('../models');
const {Cart} = require('../models');
const {Shipping_information} = require('../models');

const v = new Validator();

router.post('/checkout', async (req, res) => {

  const schema = {
    user_id: 'string',
    payment_method_id: 'string'
  }

  const validate = v.validate(req.body, schema);

  if(validate.length){
    return res
    .status(400)
    .json(validate);
  }

  const cart = await Cart.findAll({
    where: {
      user_id: req.body.user_id
    }
  });

  let total_order = cart.reduce((accumulator, object) => {
    return accumulator + object.price;
  }, 0);

  req.body.total_order = total_order;
  req.body.order_date = new Date();
  const createOrder = await Order.create(req.body);
  
  let a = [];
  let o = {};
  console.log(o);
  cart.forEach(obj => {    
    o.order_id = createOrder.id;
    o.category_id = obj.category_id;
    o.user_id = obj.user_id;
    o.product_id = obj.product_id;
    o.voucher_code = obj.voucher_code;
    o.voucher_name = obj.voucher_name;
    o.quantity = obj.quantity;
    o.price = obj.price;
    a.push(o);
  });

  const insertDetailOrder = await Shipping_information.bulkCreate(a);

  return res
  .status(200)
  .json({
    code:"200",
    message: "success",
    order: cart,
  });
});

module.exports = router;