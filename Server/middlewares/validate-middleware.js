const validate = (schema) => async (req, res, next) => {

try {
    const parseBody = await schema.parseAsync(req.body);
    req.body = parseBody;
    next();
} catch (err) {
    const status = 422;
    const message = "fill the fields properly"
    const extraDetails = err.errors[0].message;
    const error ={
        status,
        message,
        extraDetails
    }
    //res.status(400).json({msg: err.errors[0].message });
    next(error);
}


}
module.exports = validate;