const express = require("express");
const router = express.Router();
const contactSchema = require("../validators/contact-validator");
const contactForm = require("../controllers/contact-controller")
const validate = require("../middlewares/validate-middleware")

//Contact
router.route("/contact").post(validate(contactSchema),contactForm);








module.exports = router;