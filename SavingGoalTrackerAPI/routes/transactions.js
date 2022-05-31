'use strict';
const express = require('express');
const TransactionModel = require('../models/transaction');
const GoalModel = require('../models/goal');
const bodyParser = require('body-parser');
const bp = bodyParser.urlencoded({
    extended: false
});
const router = express.Router();

router.get('/', function (req, res) {
    TransactionModel.find({},(err,result)=>{
        if(err){
            console.log(err);
            res.json([]);
        }
        // Getting Values
        var TransactionMap = [];
        result.forEach(function (transaction) {
            TransactionMap.push(transaction);
        });
        res.json(TransactionMap);
    });
});

router.get('/goal/:id', function (req, res) {
    TransactionModel.find({Goal:req.params.id},(err,result)=>{
        if(err){
            console.log(err);
            res.json([]);
        }
        // Getting Values
        var TransactionMap = [];
        result.forEach(function (transaction) {
            TransactionMap.push(transaction);
        });
        res.json(TransactionMap);
    });
});




router.post('/:id',bp,(req,res)=>{
    res.json(TransactionModel.createNewTransaction(req.body,req.params.id));
})

router.delete('/:id',(req,res)=>{
    res.json(TransactionModel.findByIdAndDelete(req.params.id));
})

module.exports = router;
