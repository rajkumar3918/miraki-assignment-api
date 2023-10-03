const { genSalt, compare, hash } = require("bcrypt");
const Users = require("../modal/userSchema");
const CryptoJS = require("crypto-js");

const registerUser = async ({body})=>{
    try {
        const {email, username, password}=body;
        const checkEmail = await Users.find({email});
        
        if(checkEmail.length){
            throw new Error("Email already taken");
        } 
        const checkUsername = await Users.find({username});
        if(checkUsername.length){
            throw new Error("username already taken");
        }
        const salt = await genSalt();
        const hassedpass = await hash(password, salt);
        const date = new Date();
        const data = await Users.create({
            ...body,
            password: hassedpass,
            createdAt: date,
            updatedAt: date,
        })
        return data;
    } catch (error) {
        return error.message
    }
};

const getUsers = async () =>{
    try{
        const user = await Users.find({});
        return user;
    }catch(error){
        return error.message;

    }
};

const login = async ({body}) => {
    try {
        const {email, password} = body;
        const user = await Users.find({email});
        console.log(user)
        if(!user.length){
            throw new Error("User not fount");
        }
        const checkPass = await compare(password, user[0].password);
        if(!checkPass){
            throw new Error("worng creds")
        }
        const userData = JSON.stringify({
            userId: user[0]._id,
            email: user[0].email,
        });
        console.log( process.env.CRYPTO_SECRET);
        const token = CryptoJS.AES.encrypt(
            userData,
            process.env.CRYPTO_SECRET
        ).toString();
        return{
            token,
            userId: user[0]._id,
            email: user[0].email,
            username: user[0].username,

        }
    } catch (error) {
        console.log(error);
        return error.message;
    }
};

module.exports = {registerUser, getUsers, login};