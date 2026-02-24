require("dotenv").config();
const mongoose = require("mongoose");
const express=require("express");
const cors=require("cors");
const { todo } = require("./db");
const { createTodo, updateTodo } = require("./zodValidation");  
const app=express();
app.use(express.json()); 
app.use(cors())
app.post("/addTodo",async (req,res)=>{
    const user=req.body;
    const parsedUser=createTodo.safeParse(user);
    if(!parsedUser){
        res.status(411).json({
            msg:"You Sent the wrong Inputs"
        })
        return;
    }
    await todo.create({
        title:user.title,
        description:user.description,
        completed:false
    })
    res.json({
        msg:"TODO created"
    })
    
})
app.get("/getTodos",async (req,res)=>{
   const todos=await todo.find({});
   res.json({
    todos
})
})
app.put("/Completed",async (req,res)=>{
    const update=req.body;
    const parsedUpdate=updateTodo.safeParse(update);
    if(!parsedUser){
        res.status(411).json({
            msg:"You Sent the wrong Inputs"
        })
        return;
    }
    await todo.update({
        _id:req.body._id
    },{
        completed:true
    });
    res.json({
        msg:"todo markdone completed"
    })

})
async function main() {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("MongoDB Connected Successfully");

        app.listen(process.env.PORT || 3000, () => {
            console.log(`Server running on port ${process.env.PORT || 3000}`);
        });

    } catch (error) {
        console.error("MongoDB connection failed:", error);
    }
}
main();