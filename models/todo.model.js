const mongoose = require("mongoose")

const todoSchema = mongoose.Schema({
    task:String,
    subject:String,
    complete:Boolean,
    userId:String,
},{
    versionKey:false
})

const TodoModel = mongoose.model("Todo",todoSchema)

module.exports={
    TodoModel
}