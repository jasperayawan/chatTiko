const User = require("../models/user.model");

const getAllUsers = async (req, res) => {
  try {
    const loggedInUserId = req.user._id;

    const filteredUsers = await User.find({
      _id: { $ne: loggedInUserId },
    }).select("-password"); // .select("-password") to not include the password

    res.status(200).json(filteredUsers);
  } catch (error) {
    console.log("Error in getAllUsers: ", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = { getAllUsers };
