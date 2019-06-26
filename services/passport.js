const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const mongoose = require("mongoose");
const keys = require("../config/keys");

const User = mongoose.model("users");

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id).then(user => done(null, user));
});

passport.use(
    new GoogleStrategy(
        {
            clientID: keys.googleClientID,
            clientSecret: keys.googleClientSecret,
            callbackURL: "/auth/google/callback",
            proxy: true
        },
        (token, tokenSecret, profile, done) => {
            User.findOne({ googleId: profile.id }).then(existingUser => {
                if (existingUser) {
                    console.log("usuario ja registrado");
                    done(null, existingUser);
                } else {
                    console.log("novo usuario");
                    new User({
                        googleId: profile.id,
                        name: profile.displayName,
                        email: profile.emails[0].value
                    })
                        .save()
                        .then(user => done(null, user));
                }
            });
        }
    )
);
