const User = require('../models/User');

// GET /api/user/profile
const getProfile = async (req, res) => {
  try {
    console.log('[GET PROFILE] User ID:', req.user?.id);

    if (!req.user?.id) {
      return res.status(401).json({ error: 'Unauthorized: User ID missing' });
    }

    const user = await User.findById(req.user.id);

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.json(user.toJSON?.() || user);
  } catch (error) {
    console.error('🔥 Error in getProfile:', error.message);
    res.status(500).json({ error: 'Server error' });
  }
};

// PUT /api/user/profile
const updateProfile = async (req, res) => {
  try {
    console.log('[UPDATE PROFILE] Request body:', req.body);
    console.log('[UPDATE PROFILE] User ID:', req.user?.id);

    if (!req.user?.id) {
      return res.status(401).json({ error: 'Unauthorized: User ID missing' });
    }

    const { fullName, bio, avatar, website, location, skills } = req.body;

    // Build update object only with provided fields
    const update = {
      ...(fullName && { fullName }),
      ...(bio && { bio }),
      ...(avatar && { avatar }),
      ...(website && { website }),
      ...(location && { location }),
      ...(skills && { skills }),
    };

    const user = await User.findByIdAndUpdate(
      req.user.id,
      update,
      { new: true, runValidators: true }
    );

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    console.log('[UPDATE PROFILE] Updated user:', user);

    res.json({
      message: 'Profile updated successfully',
      user: user.toJSON?.() || user
    });
  } catch (error) {
    console.error('🔥 Error in updateProfile:', error.message);
    if (error.name === 'ValidationError') {
      console.error('🧪 Mongoose validation errors:', error.errors);
    }
    res.status(500).json({ error: 'Server error' });
  }
};

// GET /api/user/:username
const getUserByUsername = async (req, res) => {
  try {
    console.log('[GET USER BY USERNAME] Username:', req.params.username);

    const user = await User.findOne({ username: req.params.username });

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.json(user.toJSON?.() || user);
  } catch (error) {
    console.error('🔥 Error in getUserByUsername:', error.message);
    res.status(500).json({ error: 'Server error' });
  }
};

module.exports = {
  getProfile,
  updateProfile,
  getUserByUsername
};
