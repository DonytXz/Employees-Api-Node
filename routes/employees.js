const express = require('express');
const router = express.Router();

const mongoose = require('mongoose')
const Employee = mongoose.model('Employee');

router.post('/add', (req,res,next)=>{
    const employee = new Employee(req.body)
    employee.save(function(err, employee){
        if(err){
            return next(err)
        }
        res.json(employee)
    })
})

router.get('/get', async(req,res)=>{
    Employee.find(function(err,employee){
        if(err){
            return next(err)
        }
        res.json(employee)
    })
})

module.exports = router;
