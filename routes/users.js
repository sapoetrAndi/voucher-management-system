var express = require('express');
var router = express.Router();
const Validator = require('fastest-validator')
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const {User} = require('../models');

const v = new Validator();

router.post('/register', async (req, res) => {
  const schema = {
    email: 'string|min:2|email',
    password: 'string|min:6',
    name: 'string|min:2',
    address: 'string|min:3',
    contact: 'string|min:2|numeric',
    // createdAt: '',
    // updatedAt: '',
  }

  req.body.password = await hashPasswordOption2(req.body.password);
  const validate = v.validate(req.body, schema);

  if(validate.length){
    return res
    .status(400)
    .json(validate);
  }

  const user = await User.create(req.body);
  return res
    .status(200)
    .json({
      code:"200",
      message: "registration success"
    });
});

router.post('/login', async (req, res) => {
  const schema = {
    email: 'string|min:2|email',
    password: 'string|min:3'
  }

  // req.body.password = await hashPasswordOption2(req.body.password);
  const validate = v.validate(req.body, schema);
  
  if(validate.length){
    return res
    .status(400)
    .json(validate);
  }
  
  const userExist = await User.findOne({ where: { email: req.body.email } });

  if(userExist !== null){
    if (await verifyPasswordOption1(req.body.password, userExist.password)) {
      const token = generateToken();
      return res
      .status(200)
      .json({
        code: "200",
        message: "Login success!",
        token: token
      });
    }else{
      return res
      .status(400)
      .json({
        code: "400",
        message: "Invalid username or password!"
      });
    }
  }else{
    return res
    .status(400)
    .json({
      code: "400",
      message: "Invalid username or password!"
    });
  }
})

const hashPasswordOption1 = (plainPassword) => {
  const saltRounds = 0;
  bcrypt.genSalt(saltRounds, function(err, salt) {
    bcrypt.hash(plainPassword, salt, function(err, hash) {
        return hash;
    });
  });
}

async function hashPasswordOption2 (plainPassword) {
  const saltRounds = 0;
  const hashedPassword  = await new Promise((resolve, reject) => {
    bcrypt.hash(plainPassword, saltRounds, function(err, hash) {
      if (err) reject(err)
      resolve(hash)
    });
  })

  return hashedPassword;
}


async function verifyPasswordOption1 (plainPassword, hashPassword) {
  const result = await bcrypt.compare(plainPassword, hashPassword);
  return result;
}

const verifyPasswordOption2 = () => {

}


const generateToken = () => {
  let jwtSecretKey = process.env.JWT_SECRET_KEY;
  let data = {
      time: Date(),
  }
  
  const token = jwt.sign(data, jwtSecretKey, { expiresIn: '30m' });
  return token;
}

const validateToken = () => {
  let tokenHeaderKey = process.env.TOKEN_HEADER_KEY;
  let jwtSecretKey = process.env.JWT_SECRET_KEY;

  // const token = req.header(tokenHeaderKey);

  const verified = jwt.verify(tokenHeaderKey, jwtSecretKey);
  if(verified){
      return true;
  }else{
      // Access Denied
      return false;
  }
}
module.exports = router;
