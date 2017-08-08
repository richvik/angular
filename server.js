var express = require ('express');
var bodyParser = require ('body-parser');

var MongoClient = require ('mongodb').MongoClient;
var ObjectID = require('mongodb').ObjectID;
var db = require('./db');
var artistsController = require('./node_js/controlers/artists');

var app = express ();
var api = express ();
api.use (bodyParser.json ());
api.use (bodyParser.urlencoded ({extended: true}));


app.get ('/', function (req, res) {
    res.send ('Hello Api')
});

//return artists
api.get ('/artists', artistsController.all);

api.get ('/artists/:id', artistsController.findById);

api.post ('/artists', artistsController.create);

api.put ('/artists/:id', artistsController.update);
api.delete ('/artists/:id', artistsController.delete);


api.post ('/filter', artistsController.filterObject);

app.use('/api', api);

//my-syte.com/filter
db.connect ('mongodb://localhost:27017/myapi', function (err) {
    if (err) {
        return console.log (err);
    }
    app.listen (80, function () {
        console.log ('API app started');
    });
});


