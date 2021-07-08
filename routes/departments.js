const express = require('express');
const router = express.Router();

const mongoose = require('mongoose')
const Department = mongoose.model('Department');

router.post('/add', (req,res,next)=>{
    const department = new Department(req.body)
    department.save(function(err, department){
        if(err){
            return next(err)
        }
        res.json(department)
    })
})

router.get('/get', async(req,res)=>{
    Department.find(function(err,department){
        if(err){
            return next(err)
        }
        res.json(department)
    })
})

module.exports = router;