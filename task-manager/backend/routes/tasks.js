
const express = require("express");
const router = express.Router();

let tasks = [];   // in memort storage
// handle get requests
router.get("/", (req, res) =>{ 
    res.status(200).json(tasks);
});

//handle post requests
let nextId = 1;   //id is given by the server and autoincremented
router.post("/", (req, res) => {
    const {title, description, priority} = req.body;
    const newTask ={
        id: nextId++,
        title,
        description,
        completed: false,
        priority
    };
    tasks.push(newTask);
    res.status(201).json(newTask);
})

module.exports = router;