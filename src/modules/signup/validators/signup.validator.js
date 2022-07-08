const { body } = require('express-validator');

const validators = require('../../../helpers/validation.helper');

const validations = {};

validations.signup = [
    body('first_name')
        .notEmpty().withMessage('First name can not be empty'),

    body('last_name')
        .notEmpty().withMessage('Last name can not be empty'),

    body('email')
        .notEmpty().withMessage('Email can not be empty').bail()
        .isEmail().withMessage('Please enter email in valid format'),

    body('password')
        .notEmpty().withMessage('Password can not be empty').bail()
        .isLength({ min: validators.password.minLength }).withMessage(`Password must be min ${validators.password.minLength} characters in length`)
];

validations.results = validators.results;

module.exports = validations;
