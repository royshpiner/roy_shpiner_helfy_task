
const express = require("express");

const validateTask = require("../middleware/validateTask")
const router = express.Router();

let tasks = [];   // in memort storage
// handle get requests
router.get("/", (req, res) =>{ 
    res.status(200).json(tasks);
});

//handle post requests
let nextId = 1;   //id is given by the server and autoincremented
router.post("/", validateTask,(req, res) => {
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

//handle put requests
router.put("/:id", validateTask, (req, res) => {
    const id = Number(req.params.id);
    const {title, description, completed ,priority} = req.body;
    const task = tasks.find(task => task.id === id);
    if(!task){
        return res.status(404).json({error: "Not found"});
    }
    task.title = title;
    task.description = description;
    task. completed = completed;
    task.priority = priority;

    res.status(200).json(task);
})


//handling delete requests
router.delete("/:id", (req, res) => {
    const id = Number(req.params.id);
    const taskIndex = tasks.findIndex(task =>task.id === id);
    if (taskIndex === -1){
        return res.status(404).json({error: "Not found"});
    }
    tasks.splice(taskIndex, 1);
    res.status(204).send();
})

//handle patch requests
router.patch("/:id/toggle", (req, res) => {
    const id = Number(req.params.id);
    const task = tasks.find(task =>task.id === id);
    if (!task){
        return res.status(404).json({error: "Not found"});
    }
    task.completed = !task.completed;
    res.status(200).json(task);
})



module.exports = router;