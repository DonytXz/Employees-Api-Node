const mongoose = require ('mongoose');

const DepSchema = new mongoose.Schema({
    name: String,
    description: String,
    numberofemp: Number,
    timestamp: { type: Date, default: Date.now}
})

mongoose.model('Department', DepSchema);