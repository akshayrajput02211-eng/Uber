const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const userController = require('../controllers/user.controllers');

const authMiddleware = require('../middlewares/auth.middleware');
const userModel = require('../models/user.model');

router.post('/register',
 body('fullname.firstname')
  .notEmpty().withMessage('First name required')
  .isLength({ min: 3, max: 50 }),

body('fullname.lastname')
  .notEmpty().withMessage('Last name required')
  .isLength({ min: 3, max: 50 }),

    body('email')
  .trim()
  .notEmpty().withMessage('Email required')
  .isEmail().withMessage('Invalid email format'),

body('password')
  .trim()
  .notEmpty().withMessage('Password required')
  .isLength({ min: 6 }).withMessage('Password must be at least 6 characters long')
  , async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    await userController.registerUser(req, res);

  });

  router.post('/login',
  body('email')
  .trim()
  .notEmpty().withMessage('Email required')
  .isEmail().withMessage('Invalid email format'),
body('password')
  .trim()
  .notEmpty().withMessage('Password required')
  , async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    await userController .loginUser(req, res);
  }); 

  router.get('/all-users', async (req, res) => {
  const users = await userModel.find().select('-password');
  res.json(users);
  
});
router.get('/profile', authMiddleware, async (req, res) => { 
  await userController.getUserProfile(req, res);
});

router.post('/logout', authMiddleware, async (req, res) => {
  await userController.logoutUser(req, res);
});
  



module.exports = router;