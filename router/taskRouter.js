const {Router} = require("express");
const { addTask, updateTask, getAllTask, deleteTask, getTaskByUserId, completeTask } = require("../controllers/taskController");

const taskRouter = new Router();

taskRouter.post("/addTask", async(req,res)=>{
    try {
        const data = await addTask(req);
        res.send(data);
    } catch (error) {
        res.send(error.message)
    }
});

taskRouter.patch("/updateTask", async(req,res)=>{
    try {
        const data = await updateTask(req);
        res.send(data)
    } catch (error) {
        res.send(error.message)
    }
});

taskRouter.patch("/completeTask", async(req,res)=>{
    try {
        const data = await completeTask(req);
        res.send(data)
    } catch (error) {
        res.send(error.message)
    }
});

taskRouter.get("/getAll", async(req,res)=>{
    try {
        const data = await getAllTask(req);
        res.send(data);
    } catch (error) {
        res.send(error.message)
    }
});

taskRouter.get("/getByuserId", async(req,res)=>{
    try {
        const data = await getTaskByUserId(req);
        res.send(data);
    } catch (error) {
        res.send(error.message)
    }
});

taskRouter.delete("/deleteTask", async (req,res)=>{
    try {
        const data = await deleteTask(req);
        res.send(data);
    } catch (error) {
        res.send(error.message)
    }
});

module.exports = taskRouter;