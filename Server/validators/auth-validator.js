const {z} = require("zod");

//object Schema
const signupSchema = z.object({
    username: z
    .string({required_error:"Name is required"})
    .trim()//whitespace remover
    .min(3,{message:"Name must be atleast three characters"})
    .max(12,{message:"Name must not be more than 12 characters"}),
    email: z
    .string({required_error:"Email is required"})
    .trim()
    .email({message:"Invalid email address"})
    .min(3,{message:"Email must be atleast three characters"})
    .max(30,{message:"Email must not be more than 30 characters"}),
    phone: z
    .string({required_error:"Phone no is required"})
    .trim()
    .min(10,{message:"phone must be atleast ten characters"})
    .max(10,{message:"phone must not be more than 10 characters"}),
    password: z
    .string({required_error:"Password is required"})
    .min(7,{message:"Password must be atleast seven characters"})
    .max(20,{message:"Password must not be more than 20 characters"})

    

})

const loginSchema = z.object({
    email: z
    .string({required_error:"Email is required"})
    .trim()
    .min(1, { message: "Email is required" }) ,
    password: z
    .string({required_error:"Password is required"})
    .min(1,{message:"Password is required"})

    

})

module.exports = {signupSchema,loginSchema};