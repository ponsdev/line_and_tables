const dbJson = require("../models/db");
const passport = require("passport");

const mongoose = require("mongoose");
const User = mongoose.model("users");

function getTables(user) {
    return user;
    // User.find(user).then(e => console.log(e));
}

module.exports = app => {
    // OAUTH
    app.get(
        "/auth/google",
        passport.authenticate("google", {
            scope: ["profile", "email"]
        })
    );
    app.get(
        "/auth/google/callback",
        passport.authenticate("google"),
        (req, res) => {
            res.redirect("/ui");
        }
    );
    app.get("/api/logout", (req, res) => {
        req.logout();
        res.redirect("/");
    });
    app.get("/api/current_user", (req, res) => {
        res.send(req.user);
    });

    // REACT
    app.get("/api/config", (req, res) => {
        res.send(dbJson.cfg);
    });
    app.get("/api/tables", (req, res) => {
        res.send(dbJson.tables);
    });
    app.post("/api/clients", async (req, res) => {
        console.log(req.body);
        const { name, tel1, tel2, tel3, email, seats, arrivalTime } = req.body;
        const client = await new ClientRect({
            name,
            tel1,
            tel2,
            tel3,
            email,
            seats,
            arrivalTime
        }).save();
    });
    app.get("/api/clients", (req, res) => {
        res.send(req.user.clients);
    });
};
