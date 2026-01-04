async function getMyProfile(req, res) {
  const user = req.user;
  res.status(200).json({
    message: "User profile fetched successfully",
    user,
  });
}

async function updateProfile(req, res) {
  const user = req.user;
  const { fullName, email } = req.body;
}

module.exports = {
  getMyProfile,
  updateProfile,
};
