const {Router} = require("express");
const { registerUser, getUsers, login } = require("../controllers/userController");

const userRouter = new Router();

userRouter.get("/", async(req,res)=>{
    try {
        const data = await getUsers(req);
        res.send(data);
    } catch (error) {
        res.send(error.message);
    }
});

userRouter.post("/register", async(req,res)=>{
    try {
        const data = await registerUser(req);
        res.send(data);
    } catch (error) {
        res.send(error.message);
    }
})

userRouter.post("/login", async(req,res)=>{
    try {
        const data = await login(req);
        res.send(data);
    } catch (error) {
        res.status(400).send('login failed');
    }
})
module.exports = userRouter;