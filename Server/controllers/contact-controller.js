const Contact = require("../models/contact-model");



const contactForm = async (req,res) =>{
    try{
        const {username,email,message} = req.body;
        await Contact.create({username:username,email:email,message:message});
        return res.status(200).json({message : "Message sent successfully!"})

        
    } catch(error){
        
    }
    
    }









module.exports = contactForm;