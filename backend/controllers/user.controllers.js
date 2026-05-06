const userModel = require('../models/user.model');
const userService = require('../services/user.services');
const { validationResult } = require('express-validator');
const blacklistTokenModel = require('../models/blacklistToken.model');

exports.registerUser = async (req, res) => {
  try {
    const { fullname, email, password, phone } = req.body;
    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'Email already in use' });
    }   
    const hashedPassword = await userModel.hashPassword(password);
    const newUser = new userModel({
      fullname,
      email,
        password: hashedPassword,   
        phone,
    });
    await newUser.save();
    const token = newUser.generateAuthToken();
    res.status(201).json({ token, user: {
      id: newUser._id,
      fullname: newUser.fullname,
      email: newUser.email,
      phone: newUser.phone,
    }   });
  } catch (error) {
  console.log(error); 
  res.status(500).json({ message: error.message });
}
};

exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userModel
        .findOne({ email })
        .select('+password');           
    if (!user) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }
    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }
    const token = user.generateAuthToken();
    res.cookie('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'Strict',
    }); 
    res.status(200).json({ token, user: {
      id: user._id,
      fullname: user.fullname,
      email: user.email,
      phone: user.phone,
    } });
    } catch (error) {
    console.error("Login Error:", error);
    res.status(500).json({ message: 'Server error' });
  }
};  

exports.getUserProfile = async (req, res) => {
  try {
    const user = await userModel.findById(req.user._id).select('-password');    
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);
    } catch (error) {
    console.error("Profile Error:", error);
    res.status(500).json({ message: 'Server error' });
  }
};

exports.updateUserProfile = async (req, res) => {
  try {
    const { fullname, email, phone } = req.body;
    const user = await userModel.findById(req.user._id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    user.fullname = fullname;
    user.email = email;
    user.phone = phone;
    await user.save();
    res.json(user);
  } catch (error) {
    console.error("Update Profile Error:", error);
    res.status(500).json({ message: 'Server error' });
  }
};

exports.deleteUserProfile = async (req, res) => {
  try {
    const user = await userModel.findByIdAndDelete(req.user._id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json({ message: 'User deleted successfully' });
  } catch (error) {
    console.error("Delete Profile Error:", error);
    res.status(500).json({ message: 'Server error' });
  }
};

exports.getAllUsers = async (req, res) => {
  try {
    const users = await userModel.find().select('-password');         
    res.json(users);
  } catch (error) {
    console.error("Get All Users Error:", error);
    res.status(500).json({ message: 'Server error' });
  }
};

exports.logoutUser = async (req, res) => {
  try {
   const authHeader = req.header('Authorization');

if (!authHeader || !authHeader.startsWith('Bearer ')) {
  return res.status(400).json({ message: 'No token provided' });
}

const token = authHeader.split(' ')[1];
    const expiresAt = new Date();
    await blacklistTokenModel.create({ token, expiresAt });

    res.json({ message: 'Logout successful' });
  } catch (error) {
    console.error("Logout Error:", error);
    res.status(500).json({ message: 'Server error' });
  } 
};

