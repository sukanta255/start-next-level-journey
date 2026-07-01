const Todonext = require("../models/Todonext");

exports.getTodos = async(req,res)=>{
    const todos = await Todonext.find().sort({createdAt:-1});
    res.json(todos);
}

exports.createTodo = async(req,res)=>{
    const todo = await Todonext.create(req.body);
    res.status(201).json(todo);
}

exports.updateTodo = async(req,res)=>{
    const todo = await Todonext.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new:true}
    );
    res.json(todo);
}

exports.deleteTodo = async(req,res)=>{
    await Todonext.findByIdAndDelete(req.params.id);
    res.json({message:"Deleted"});
}