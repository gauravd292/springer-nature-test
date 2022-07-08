require('dotenv').config()

if(process.env.NODE_ENV == 'prod'){
    module.exports = require('./dev');
}
else if(process.env.NODE_ENV == 'dev'){
    module.exports = require('./prod');
}
else{
    module.exports = require('./prod');
}