var Artists = require ('../models/artists');

exports.all = function (req, res) {
    Artists.all (function (err, doc) {
        if (err) {
            console.log (err);
            return res.sendStatus (500)
        }
        res.send (doc)
    })
};

exports.findById = function (req, res) {
    // {_id:ObjectID(req.params.id)}
    Artists.findById (req.params.id, function (err, doc) {
        if (err) {
            console.log (err);
            return res.sendStatus (500)
        }
        res.send (doc)
    })
};


exports.create = function (req, res) {
    Artists.create (req.body, function (err, result) {
        if (err) {
            console.log (err);
            return res.sendStatus (500)
        }
        res.send (req.body)
    })
};

exports.update = function (req, res) {
    Artists.update (req.params.id, {name: req.body.name}, function (err, result) {
        if (err) {
            console.log (err);
            return res.sendStatus (500)
        }
        res.send (200)
    })
};
exports.delete = function (req, res) {
    Artists.delete (req.params.id, function (err, result) {
        if (err) {
            console.log (err);
            return res.sendStatus (500)
        }
        res.sendStatus (200)
    })
};

exports.filterObject = function (req, res) {
    console.log(req.body, req.params);
    var getName = {
       name: req.body.name
    };
    // {name: "Mustang"}
    Artists.filterObject (req.body, function (err, doc) {
        if (err) {
            console.log (err);
            return res.sendStatus (500)
        }
        res.send (doc)
    })
};