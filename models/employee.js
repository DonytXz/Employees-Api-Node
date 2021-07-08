const mongoose = require ('mongoose');

const EmpSchema = new mongoose.Schema({
    // id: Number,
    name: String,
    gender: String,
    // dateofbirth: Number,
    salary: Number,
    position: String,
    timestamp: { type: Date, default: Date.now }
    // department: String
})

    
mongoose.model('Employee', EmpSchema);