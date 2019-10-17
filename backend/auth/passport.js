const passport = require("passport");
const { db } = require('../db/index.js')

module.exports = () => {
  passport.serializeUser((user, done) => {
    done(null, user.email);
  });

  passport.deserializeUser((email, done) => {
    db.one('SELECT * FROM users WHERE email = ${email}', {
      email: email
    })
      .then(user => {
        done(null, {email:user.email, id: user.id,  username: user.username});
      })
      .catch(err => {
        done(err, null);
      });
  });
};