var express = require ('express');
var bodyParser = require ('body-parser');

var MongoClient = require ('mongodb').MongoClient;
var ObjectID = require('mongodb').ObjectID;
var db = require('./db');
var artistsController = require('./node_js/controlers/artists');

var app = express ();
app.use (bodyParser.json ());
app.use (bodyParser.urlencoded ({extended: true}));


app.get ('/', function (req, res) {
    res.send ('Hello Api')
});

//return artists
app.get ('/artists', artistsController.all);

app.get ('/artists/:id', artistsController.findById);

app.post ('/artists', artistsController.create);

app.put ('/artists/:id', artistsController.update);
app.delete ('/artists/:id', artistsController.delete);


app.post ('/filter', artistsController.filterObject);


db.connect ('mongodb://localhost:27017/myapi', function (err) {
    if (err) {
        return console.log (err);
    }
    app.listen (4300, function () {
        console.log ('API app started');
    });
});


