const jwt = require('jsonwebtoken');

const secrets = require('../secret/secrets');

module.exports = (req, res, next) => {
    const token = req.headers.authorization;
  
    if (token) {
      jwt.verify(token, secrets.jwtSecret, (err, decodedToken) => {
        if (err) {
          res.status(401).json({ you: "unauthorized" });
        } else {
          req.decodedJwt = decodedToken;
          next();
        }
      });
    } else {
      res.status(401).json({ you: 'can not enter' });
    }
  };