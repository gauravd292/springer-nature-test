const { validationResult } = require("express-validator");

const validations = {};

validations.password = {
    minLength: 8
};

validations.results = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        const errMsg = errors.array().map(x => x.msg);
        return res.status(400).json(errMsg);
    }
    next();
};

module.exports = validations;