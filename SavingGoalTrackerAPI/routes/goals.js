'use strict';
const express = require('express');
const GoalModel = require('../models/goal');
const bodyParser = require('body-parser');
const bp = bodyParser.urlencoded({
    extended: false
});
const router = express.Router();

router.get('/', function (req, res) {
    GoalModel.find({},(err,result)=>{
        if(err){
            console.log(err);
            res.json([]);
        }
        // Getting Values
        var GoalsMap = [];
        result.forEach(function (goal) {
            GoalsMap.push(goal);
        });
        res.json(GoalsMap);
    });
});

router.post('/',bp,(req,res)=>{
    res.json(GoalModel.createNewGoal(req.body));
})

router.put('/:id',bp,(req,res)=>{
    res.json(GoalModel.updateGoal(req.params.id,req.body.title,req.body.Goal));
})

router.delete('/:id',(req,res)=>{
    res.json(GoalModel.findByIdAndDelete(req.params.id));
})
module.exports = router;
