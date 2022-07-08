const ctrl = {};

ctrl.showFrm = (req, res) => {
    res.render(`${__dirname}/../views/form`);
}

module.exports = ctrl;