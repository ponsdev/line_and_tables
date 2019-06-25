const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const keys = require("../config/keys");

passport.use(
    new GoogleStrategy(
        {
            clientID: keys.googleClientID,
            clientSecret: keys.googleClientSecret,
            callbackURL: "/auth/google/callback"
        },
        async (token, tokenSecret, profile, done) => {
            console.log(token);
            console.log(tokenSecret);
            console.log(profile);
            await done(profile);
        }
    )
);
