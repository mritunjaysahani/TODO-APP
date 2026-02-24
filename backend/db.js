const mongoose=require("mongoose");
const todoSchema=mongoose.Schema({
    title:String,
    description:String,
    completed:Boolean

})
const todo=mongoose.model('addTodos',todoSchema);
module.exports={
    todo
}