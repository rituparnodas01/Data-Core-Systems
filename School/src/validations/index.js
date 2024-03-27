const { validationResult, check } = require('express-validator')

const validator = (req) => {
    const messages = {}
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        console.log(errors);
        errors.array().forEach((error) => {
            messages[error.path] = error.msg;
        });
    }
    return messages
}



//exports
module.exports = {
    validator,
}