const express = require("express");
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const keys = require("./config/keys");
const app = express();

passport.use(
    new GoogleStrategy(
        {
            clientID: keys.googleClientID,
            clientSecret: keys.googleClientSecret,
            callbackURL: "/auth/google/callback"
        },
        async (token, tokenSecret, profile, done) => {
            console.log(token);
            await done(profile);
        }
    )
);

app.get(
    "/auth/google",
    passport.authenticate("google", {
        scope: ["profile", "email"]
    })
);
app.get("/auth/google/callback", () => {
    hi: "there";
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);
