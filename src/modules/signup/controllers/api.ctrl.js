const ctrl = {};

ctrl.submitFrm = (req, res) => {
    const input = req.body;
    let msg = `Hello ${input.first_name} ${input.last_name}, Thank you for signing up.`;
    if(input.subscribe == 1){
        msg += ` You would be receiving our periodic newsletters to your email: ${input.email}`;
    }
    else{
        msg += ` Your account is now created`;
    }
    res.status(200).json(msg);
}

module.exports = ctrl;