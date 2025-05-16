import User from "../models/User.js";

// Create a new user
export const createUser = async (req, res) => {
  const newUser = new User(req.body);

  try {
    const savedUser = await newUser.save();

    res.status(200).json({
      success: true,
      message: "✅Successfully created the user.",
      data: savedUser,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "❌Failed to create the user. Please try again.",
      error: err.message, // Include error message for debugging
    });
  }
};

// Update user
export const updateUser = async (req, res) => {
  const id = req.params.id;

  try {
    const updatedUser = await User.findByIdAndUpdate(
      id,
      {
        $set: req.body,
      },
      { new: true },
    );
    res.status(200).json({
      success: true,
      message: "✅Successfully updated.",
      data: updatedUser,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "❌Failed to update the user.",
    });
  }
};

// Delete user
export const deleteUser = async (req, res) => {
  const id = req.params.id;

  try {
    await User.findByIdAndDelete(id);
    res.status(200).json({
      success: true,
      message: "✅Successfully deleted the user.",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "❌Failed to delete the user.",
    });
  }
};

// Get single user
export const getSingleUser = async (req, res) => {
  const id = req.params.id;

  try {
    const user = await User.findById(id);
    res.status(200).json({
      success: true,
      message: "✅User found.",
      data: user,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: "❌User not found.",
    });
  }
};

// Get all users
export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({});

    res.status(200).json({
      success: true,
      message: "✅Users fetched successfully.",
      data: users,
    });
  } catch (err) {
    res.status(404).json({
      success: false,
      message: "❌Users not found.",
    });
  }
};
