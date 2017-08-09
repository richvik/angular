var express = require ('express');
var bodyParser = require ('body-parser');

var MongoClient = require ('mongodb').MongoClient;
var ObjectID = require('mongodb').ObjectID;
var db = require('./db');
var mainController = require('./node_js/controlers/artists');

var app = express ();
var api = express ();
api.use (bodyParser.json ());
api.use (bodyParser.urlencoded ({extended: true}));


api.get ('/test', function (req, res) {
    res.send ('Hello Api')
});

//return artists
api.get ('/artists', mainController.all);

api.get ('/artists/:id', mainController.findById);

api.post ('/eventCreate', mainController.create);

api.put ('/artists/:id', mainController.update);
api.delete ('/artists/:id', mainController.delete);



//new data
api.post ('/events', mainController.filterObject);

api.get ('/city', mainController.city);

app.use('/api', api);
app.use('/', express.static("./dist"));

//my-syte.com/filter
db.connect ('mongodb://localhost:27017/myapi', function (err) {
    if (err) {
        return console.log (err);
    }
    app.listen (4300, function () {
        console.log ('API app started');
    });
});


