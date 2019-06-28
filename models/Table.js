const mongoose = require("mongoose");
const { Schema } = mongoose;

const tableSchema = new Schema({
    table: Number,
    seats: Number,
    adjTables: String,
    status: Number,
    checkinTime: Date
});

mongoose.model("table", tableSchema);
