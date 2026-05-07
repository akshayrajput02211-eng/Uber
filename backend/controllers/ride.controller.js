const rideModel = require("../models/ride.model");

module.exports.createRide = async (
  req,
  res
) => {

  try {

    const {
      pickup,
      destination,
      fare,
    } = req.body;

    const ride = await rideModel.create({
      user: req.user._id,
      pickup,
      destination,
      fare,
    });

    return res.status(201).json(ride);

  } catch (error) {

    return res.status(500).json({
      message: error.message,
    });

  }

};