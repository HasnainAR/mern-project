const User = require("../models/user-model");
const bcrypt = require("bcryptjs");



const home = async (req,res) =>{
try{
    res.status(200).send("Welcome to server")
} catch(error){
    console.log(error)
}

}

//*--------------------
// Register
//*--------------------
const register = async (req,res) =>{
   
    try{
        const {username,email,phone,password} = req.body;
        const userExist = await User.findOne({email: email});

    if(userExist){
        return res.status(400).json({msg: "email already exists"});
    }



    const newUser = await User.create({username:username,email:email,phone:phone,password: password})

        res.status(200).send({message: "Registration Success!", token: await newUser.generateToken(),
            userId: newUser._id.toString()
        });
    } catch(error){
        res.status(500).send({msg:"page not found"})
    }
    
    }


//*--------------------
// Login
//*--------------------
const login = async (req,res) =>{
   
    try{
        const {email,password} = req.body;
       
        const userExist = await User.findOne({email});
        

        if(!userExist){
            return res.status(400).json({message: "Invalid credentials"});
        }

        const user = await userExist.comparePassword(password);
        if(user)
        {
            res.status(200).json({message: "login Success!", token: await userExist.generateToken(),
                userExist: userExist._id.toString()
            });
        }else{
            res.status(401).json({message: "Invalid email or password"})
        }
        
    } catch(error){
        res.status(500).send("Internal server error")
       
    }
    
    }
module.exports = {home,register,login};