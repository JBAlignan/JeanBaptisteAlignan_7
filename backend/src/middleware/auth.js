//Importation de jsonwebtoken.
const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    try {
      const token = req.headers.authorization.split(' ')[1];
      const decodedToken = jwt.verify(token, 'RANDOM_TOKEN_SECRET');
          next();

      // const userId = decodedToken.userId;
      //   if (req.body.userId && req.body.userId !== userId) {
      //     console.log({message: "userId"})
      //     console.log({message: "req.body.userId"})

      //     throw 'Invalid user ID';
      //   } else {
      //     next();
      //   }
    } catch {
      res.status(401).json({
        error: new Error('Invalid request!')
      });
    }
  };