const userModel = require('../models/user.model');
const jwt = require('jsonwebtoken');
const blacklistTokenModel = require('../models/blacklistToken.model');

module.exports = async (req, res, next) => {
  try {
    const authHeader = req.header('Authorization');

    
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ message: 'No token, authorization denied' });
    }

 
    const token = authHeader.split(' ')[1];

    console.log("TOKEN:", token); // debug

    
    const blacklistedToken = await blacklistTokenModel.findOne({
      token,
      expiresAt: { $gt: new Date() }
    });

    if (blacklistedToken) {
      return res.status(401).json({ message: 'Token is blacklisted' });
    }

   
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.user = await userModel.findById(decoded._id).select('-password');

    next();

  } catch (error) {
    console.log(error); 
    res.status(401).json({ message: 'Invalid token' });
  }
};


module.exports.isCaptain = async (req, res, next) => {
  try {
    if (req.user.role !== 'captain') {
      return res.status(403).json({ message: 'Access denied: Captains only' });
    }
    next();
  }

  catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Server error' });
  }
};
