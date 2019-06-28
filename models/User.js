const mongoose = require("mongoose");
const { Schema } = mongoose;
const ClientSchema = require("./Client");
const TableSchema = require("./Table");

const userSchema = new Schema({
    googleId: String,
    info: {
        name: String,
        email: String
    },
    cfg: {
        placeName: String,
        placeAdress: String,
        placeTel: Number
    },
    tables: [TableSchema],
    clients: [ClientSchema]
});

mongoose.model("users", userSchema);
