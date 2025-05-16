import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from 'jsonwebtoken';

// User registration
export const register = async (req, res) => {
    try {
        // Hash the password
        const salt = await bcrypt.genSaltSync(10);
        const hash = await bcrypt.hashSync(req.body.password, salt);

        // Create new user with hashed password
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hash,
            photo: req.body.photo,
        });

        // Save user to the database
        await newUser.save();

        res.status(200).json({ success: true, message: "✅ Successfully created the user." });
    } catch (err) {
        res.status(500).json({ 
            success: false, 
            message: "❌ Failed to create the user. Please try again.",
            error: err.message  // helpful for debugging
        });
    }
};


export const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        // Find user by email
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(404).json({ success: false, message: "User not found" });
        }

        // Compare password
        const isPasswordCorrect = await bcrypt.compare(password, user.password);

        if (!isPasswordCorrect) {
            return res.status(401).json({ success: false, message: "Incorrect email or password" });
        }

        // Remove sensitive data before sending
        const { password: pwd, role, ...userData } = user._doc;

        // Send response without JWT
        return res.status(200).json({
            success: true,
            message: "Login successful",
            user: userData
        });

    } catch (err) {
        console.error("Login error:", err);
        return res.status(500).json({ success: false, message: "Server error" });
    }
};