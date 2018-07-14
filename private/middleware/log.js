const log = (req, res, next) => {
    console.log(req);
    next();
}

module.exports = log;