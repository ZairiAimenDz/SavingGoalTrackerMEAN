const mongoose = require("mongoose")

const Transaction = mongoose.Schema({
    title: String,
    ammount:Number,
    date:Date,
    Goal: { type: mongoose.Schema.Types.ObjectId, ref: "Goal" }
})

let TransactionModel = module.exports = mongoose.model("Transaction", Transaction);

module.exports.getTransactionById = (id) => {
    TransactionModel.findById(id, (err, result) => {
        if (err)
            console.log(err);
        return result;
    })
}

module.exports.getTransactionsByGoalID = (goalID)=>{
    const query = {Goal:goalID};
    TransactionModel.find(query).then((res)=>{
        return res;
    });
}

module.exports.createNewTransaction = (reqbody,goalid) => {
    var goal = new TransactionModel({
        title: reqbody.title,
        ammount: reqbody.amount,
        date:Date.now(),
        Goal:goalid
    });
    goal.save();
}