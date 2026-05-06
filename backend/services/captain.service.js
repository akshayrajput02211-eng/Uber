const captainModel = require('../models/captain.model');

exports.updateCaptainProfile = async (req, res) => {
    try {
        const updates = Object.keys(req.body);
        const allowedUpdates = ['fullName', 'email', 'phoneNumber', 'vechicle', 'color', 'licensePlate', 'capacity', 'vechicleType'];
        const isValidOperation = updates.every(update => allowedUpdates.includes(update));
        if (!isValidOperation) {
            return res.status(400).json({ error: 'Invalid updates!' });
        }
        const captain = await captainModel.findById(req.captain._id);

        if (!captain) {
            return res.status(404).json({ error: 'Captain not found' });
        }
        updates.forEach(update => captain[update] = req.body[update]);
        await captain.save();
        res.json(captain);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.registerCaptain = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    try {
        const { name, email, phoneNumber, password, vehicle, color, licensePlate, capacity, vehicleType } = req.body;
        const existingCaptain = await captainModel.findOne({ email
        });
        if (existingCaptain) {
            return res.status(400).json({ error: 'Email already in use' });
        }
    } catch (err) { 
         res.status(500).json({ error: err.message });
    }};




exports.loginCaptain = async (req, res) => {
    try {
        const { email, password } = req.body;
        const captain = await captainModel.findOne({ email
        });
        if (!captain) {
            return res.status(400).json({ error: 'Invalid email or password' });
        }
        const isMatch = await captain.comparePassword(password);
        if (!isMatch) {
            return res.status(400).json({ error: 'Invalid email or password' });
        }
        const token = captain.generateAuthToken();
        res.json({ token });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getCaptainProfile = async (req, res) => {

    try {
        const captain = await captainModel.findById(req.captain._id).select('-password');
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
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

