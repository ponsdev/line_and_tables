const mongoose = require("mongoose");
const { Schema } = mongoose;

const clientSchema = new Schema({
    name: String,
    tel1: Number,
    tel2: Number,
    tel3: Number,
    email: String,
    seats: Number,
    arrivalTime: Date
});

mongoose.model("client", clientSchema);
