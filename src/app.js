// express
const express = require('express');
const app = express();

// some configurations
const configEnv = require('./config');
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(express.static(`${__dirname}/../public`));

// view engine
app.set('view engine', 'ejs');

// routing
app.use('/', require('./modules/signup/routes/signup.routes'));

// server
const port = configEnv.port || 3000;
const host = configEnv.host || "localhost";
app.listen(port, host, () => {
    console.log(`Server running on ${host}:${port}`);
});

if(configEnv.env == 'dev'){
    module.exports = app;
}
