const {z} = require("zod");


const contactSchema = z.object({
    username: z
    .string({required_error:"Username is required"})
    .trim()
    .min(1, { message: "Username is required" }) ,
    email: z
    .string({required_error:"Email is required"})
    .min(1,{message:"email is required"}),
    message: z
    .string({required_error:"Message is required"})
    .min(1,{message:"Enter message"})

    

})

module.exports = contactSchema;
;