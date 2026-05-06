const captainmodel = require("../models/captain.model");
const { validationResult } = require('express-validator');

exports.registerCaptain = async (req, res) => {

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {


        const { name, email, phoneNumber, password, vehicle, color, licensePlate, capacity, vehicleType } = req.body;
        const iscaptainExist = await captainmodel.findOne({ email });
        if (iscaptainExist) {
            return res.status(400).json({ error: 'Captain with this email already exists' });
        }   
        const hashedPassword = await captainmodel.hashPassword(password);
        const captain = new captainmodel({
            fullName: name,
            email,
            phoneNumber,
            password: hashedPassword,
            vehicle,
            color,
            licensePlate,
            capacity,
            vehicleType
        });
        await captain.save();
        const token = captain.generateAuthToken();
        res.status(201).json({ token });
        
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

exports.loginCaptain = async (req, res) => {

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const { email, password } = req.body;
        const captain = await captainmodel.findOne({ email });
        if (!captain) {
            return res.status(400).json({ error: 'Invalid email or password' });
        }
        const isMatch = await captain.comparePassword(password);
        if (!isMatch) {
            return res.status(400).json({ error: 'Invalid email or password' });
        }
        const token = captain.generateAuthToken();
        res.json({ token });
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getCaptainProfile = async (req, res) => {
    try {
        const captain = await captainmodel.findById(req.captain._id).select('-password');   
        if (!captain) {
            return res.status(404).json({ error: 'Captain not found' });
        }   
        res.json(captain);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.logoutCaptain = async (req, res) => {
    try {
        const token = req.header('Authorization').split(' ')[1];
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const expiresAt = new Date(decoded.exp * 1000); 
        const blacklistedToken = new blacklistTokenModel({ token, expiresAt });
        await blacklistedToken.save();
        res.json({ message: 'Logged out successfully' });
    }

    catch (err) {
        res.status(500).json({ error: err.message });
    }
};



