var db = require ('../../db');
var ObjectID = require ('mongodb').ObjectID;

exports.all = function (cb) {
    db.get ().collection ('artists').find ().toArray (function (err, doc) {
        cb (err, doc)
    })
};

exports.city = function (cb) {
    db.get ().collection ('city').find ().toArray (function (err, doc) {
        cb (err, doc)
    })
};

exports.findById = function (id, cb) {
    db.get ().collection ('artists').findOne ({_id: ObjectID (id)}, function (err, doc) {
        cb (err, doc)
    })
};

exports.create = function (artist, cb) {
    db.get ().collection ('artists').insert (artist, function (err, result) {
        cb (err, result)
    })
};

exports.update = function (id, newData, cb) {
    db.get ().collection ('artists').updateOne ({_id: ObjectID (id)}, newData, function (err, result) {
        cb (err, result)
    })
};

exports.delete = function (id, cb) {
    db.get ().collection ('artists').deleteOne ({_id: ObjectID (id)}, function (err, result) {
        cb (err, result)
    })
};

exports.filterObject = function (obj,cb) {
    db.get().collection('artists').find(obj).toArray(function(err,docs){
       cb(err,docs)
    })

  /*
  function(req, res){
        db.get().collection('artists').find({name: "Mustang"}).toArray(function(err,docs){
            if (err) {
                console.log (err);
                return res.sendStatus (500)
            }
            res.send(docs)
        })
    }
    */
};