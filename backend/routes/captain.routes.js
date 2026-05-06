const express = require('express');
const router = express.Router();
const captainController = require('../controllers/captain.controller');
const auth = require('../middlewares/auth.middleware'); 
const {body} = require('express-validator');
const validate = require('../middlewares/validation.middleware');


router.post('/register',
  [
    body('name').notEmpty().withMessage('Name is required'),
    body('email').isEmail().withMessage('Valid email required'),
    body('password').isLength({ min: 6 }).withMessage('Min 6 char password'),
    body('phoneNumber').notEmpty().withMessage('Phone required'),
    body('vehicle').notEmpty().withMessage('Vehicle required'),
    body('color').notEmpty().withMessage('Color required'),
    body('licensePlate').notEmpty().withMessage('License plate required'),
    body('capacity').notEmpty().withMessage('Capacity required'),
    body('vehicleType').notEmpty().withMessage('Vehicle type required')

  ],
  validate,
  captainController.registerCaptain
);


router.post('/login',
  [
    body('email').isEmail().withMessage('Valid email required'),
    body('password').notEmpty().withMessage('Password required')
  ],
  validate,
  captainController.loginCaptain
);  

router.get('/profile', auth, auth.isCaptain, async (req, res) => {
  try {
    const captain = await captainmodel.findById(req.user._id).select('-password');
    if (!captain) {
      return res.status(404).json({ message: 'Captain not found' });
    }
    res.json(captain);
  }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Server error' });
    }
});

router.get('/logout', auth, auth.isCaptain, async (req, res) => {
  try {
    const token = req.header('Authorization').split(' ')[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const expiresAt = new Date(decoded.exp * 1000);

    const blacklistedToken = new blacklistTokenModel({ token, expiresAt });
    await blacklistedToken.save();
    res.json({ message: 'Logged out successfully' });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Server error' });
    }   

});





module.exports = router;


