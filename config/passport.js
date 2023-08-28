const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcryptjs");
const User = require("../models/user");

passport.use(
  new LocalStrategy(async (username, password, done) => {
    console.log("aaaaaaaaaaaaaa");
    try {
      const user = await User.findOne({ email: username });

      if (!user) {
        console.log("111111111111111")
        return done(null, false, { message: "Incorrect username" });
      }

      const match = await bcrypt.compare(password, user.password);
      if (!match) {
        console.log("2222222222")
        return done(null, false, { message: "Incorrect password " });
      }
      return done(null, user);
    } catch (err) {
      return done(err);
    }
  })
);

passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(async function (id, done) {
  try {
    const user = await User.findById(id);
    done(null, user);
  } catch (err) {
    done(err);
  }
});
