const Task = require("../modal/taskSchema");

const addTask = async ({body})=>{
    try {
        const date = new Date();
        const data = await Task.create({
            ...body,
            createdAt: date,
            updatedAt: date,
        });
        return data;
    } catch (error) {
        return error.message
    }
};

const updateTask = async (req)=>{
    try {
        const {taskId} = req.body;
        const date = new Date();
        const data = await Task.findOneAndUpdate({_id: taskId},{
            $set:{
                ...req.body,
                updatedAt: date,
            }
        });
        return data;
    } catch (error) {
        return error.message;
    }
};


const getAllTask = async ()=>{
    try {
        const data = await Task.find({});
        return data;
    } catch (error) {
        return error.message
    }
};

const getTaskByUserId = async (req)=>{
    try {
        const {userId} = req.body;
        const data = await Task.find({_id: userId})
        return data;
    } catch (error) {
        return error.message
    }
};

const completeTask = async (req)=>{
    try {
        const {status, taskId} = req.body;
        const date = new Date();
        const data = await Task.findOneAndUpdate({ _id: taskId },{
            ...req.body,
            complete: status,
            updatedAt:date
        });
        return data;
        
    } catch (error) {
        return error.message
    }
        
}

const deleteTask = async (req) => {
    try {
        const {taskId} = req.body; 
        if (!taskId) {
            throw new Error("Task ID is missing in the request parameters");
        }

        const data = await Task.findOneAndDelete({ _id: taskId });
        if (!data) {
            throw new Error("Task not found");
        }

        return data;
    } catch (error) {
        return error.message;
    }
};

module.exports = {addTask, updateTask, getAllTask, deleteTask, getTaskByUserId, completeTask}
