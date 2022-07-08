const routes = require('express').Router();

const validators = require('../validators/signup.validator');
const webCtrl = require('../controllers/web.ctrl');
const apiCtrl = require('../controllers/api.ctrl');

routes.get(
    '/',
    webCtrl.showFrm
);

routes.post(
    '/signup',
    validators.signup,
    validators.results,
    apiCtrl.submitFrm
);

module.exports = routes;