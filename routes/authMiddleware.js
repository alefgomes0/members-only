module.exports.isAuth = (req, res, next) => {
  req.isAuthenticated()
    ? next()
    : res
        .status(401)
        .json({ msg: "Unauthorized access. You've to be logged in" });
};

module.exports.isAdmin = (req, res, next) => {
  req.isAuthenticated() && req.user.is_admin
  ? next()
  : res
      .status(401)
      .json({ msg: "Unauthorized access. You've to be an admin" });
};
