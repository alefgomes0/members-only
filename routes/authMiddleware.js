module.exports.isAuth = (req, res, next) => {
  if (req.isAuthenticated()) {
    next()
  } else {
    res.status(401).json({ msg: "Unauthorized access. You've to be logged in" })
  }
}





module.exports.isAdmin = (req, res, next) => {

}