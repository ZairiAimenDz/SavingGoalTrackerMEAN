const mongoose = require("mongoose")

const Goal = mongoose.Schema({
    title: String,
    category: String,
    CurrentAmmount: Number,
    Goal: Number,
    transactions: [{ type: mongoose.Schema.Types.ObjectId, ref: "Transactions" }]
})

let GoalModel = module.exports = mongoose.model("Goal", Goal);

module.exports.getGoalById = (id) => {
    GoalModel.findById(id, (err, result) => {
        if (err)
            console.log(err);
        return result;
    })
}

module.exports.updateGoal=(id,reqtitle,goalammount)=>{
   GoalModel.findByIdAndUpdate(id,{$set:{title:reqtitle,Goal:goalammount}}).then((res)=>{return res});
}

module.exports.createNewGoal = (reqbody) => {
    var goal = new GoalModel({
        title: reqbody.title,
        category: reqbody.description,
        CurrentAmmount: reqbody.CurrentAmmount,
        Goal: reqbody.Goal,
        transactions: []
    });
    goal.save();
    return goal.id;
}

module.exports.addTransactionToGoal = (id,transactionID,transactionammout) => {
    GoalModel.findByIdAndUpdate(id,{
        $push:{transactions:[transactionID]},
        $inc:{ CurrentAmmount:transactionammout }
    });
}