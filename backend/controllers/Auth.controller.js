const User = require("../models/user.model");
const bcrypt = require('bcrypt');
const generateTokenAndSetCookie = require("../utils/generateToken");
const saltRounds = 10;
const salt = bcrypt.genSaltSync(saltRounds)

const signup = async (req, res) => {
  try {
    const { fullName, username, password, cPassword, gender } = req.body;

    if (password !== cPassword) {
      res.status(400).json({ error: "Passwords don't match" });
    }

    const user = await User.findOne({ username });

    if (user) throw new Error("Username already exist");

    const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
    const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;

    const hashedPassword = bcrypt.hashSync(password, salt)

    const newUser = new User({
      fullName,
      username,
      password: hashedPassword,
      gender,
      profilePic: gender === "male" ? boyProfilePic : girlProfilePic,
    });

    if(newUser){
        // Generate JWT token here
        generateTokenAndSetCookie(newUser._id, res)
        await newUser.save();

        res.status(200).json({
            _id: newUser._id,
            fullName: newUser.fullName,
            username: newUser.username,
            profilePic: newUser.profilePic
        })
    } else {
        res.status(400).json({ error: "Invalid user data" })
    }
  } catch (error) {
    console.log("Error in signup controller", error.message)
    res.status(500).json({ error: "Internal Server Error" })
  }
};

const login = async (req, res) => {
    try{
        const { username, password } = req.body;
        const user = await User.findOne({ username });

        if(!user) throw new Error("User not Found!")
        const isPasswordCorrect = await bcrypt.compare(password, user?.password)
        if(!isPasswordCorrect) throw new Error("Wrong password!");

        generateTokenAndSetCookie(user._id, res);

        res.status(200).json({
            _id: user._id,
            fullName: user.fullName,
            username: user.username,
            profilePic: user.profilePic,
        })
    }
    catch(error){
        console.log("Error in login controller", error.message)
        res.status(500).json({ error: "Internal server error" })
    }
}


const logout = async (req, res) => {
    try{
        res.cookie("jwt","", {maxAge: 0});
        res.status(200).json({ message: "Logged out successfully" })
    }
    catch(error){
        console.log("Error in logout controller", error.message)
        res.status(500).json({ error: "Internal server error" })
    }
}


module.exports = { signup, login, logout }