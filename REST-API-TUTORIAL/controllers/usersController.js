let users = require("../models/usersModel");
const path = require("path");
const {v4: uuidv4} = require("uuid");


const getHome = (req,res)=>{
    res.sendFile(path.join(__dirname,"../views/index.html"))
}
const getUsers = (req,res)=>{
    res.status(200).json({users})
}

const createUser =(req,res)=>{
    const user = {
        id:uuidv4(),
        userName: req.body.userName,
        email: req.body.email
    }
    users.push(user)
    res.status(201).json({users})
}

const updateUser =(req,res)=>{
    const userId = req.params.id;
    const {userName,email} = req.body;
    users.filter((user)=>user.id===userId).map((selectedUser)=>{
        selectedUser.usesrName = userName;
        selectedUser.email = email;
    })
    res.status(200).json({users})    
}


const deleteUser = (req,res) =>{
    const userId = req.params.id;
    users = users.filter((user)=>user.id!=userId);
    res.status(200).json({users});
}

module.exports = {
    getHome,getUsers,createUser,updateUser,deleteUser
}