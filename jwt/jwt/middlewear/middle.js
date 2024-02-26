const { body, validationResult } = require("express-validator");
var jwt = require("jsonwebtoken");
require("dotenv").config();
const validate = () => {
    // middleware to sanitize the user inputs
    
  return [
    body("username").trim().isLength({ min: 5 }).escape(),
    body("password").trim().isLength({ min: 5 }).escape(),
    (req, res, next) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      next();
    },
  ];
};
const verifyToken = (req,res,next) => {
    let token = req.headers.authorization;
    if (!token) {
        res.send("there is no token")
    }
    console.log(token)
    token = token.split(" ")[1]
    jwt.verify(token, process.env.Secret_Token, (err, data) => {
      if (err) {
        res.status(403).send("you are not logged in");
      } else {
          console.log(data);
          req.user = data
        next();
      }
    });
};
module.exports = {validate ,verifyToken} ;