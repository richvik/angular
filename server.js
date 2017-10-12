var express = require ('express');
var bodyParser = require ('body-parser');

var port = process.env.PORT || 8080;

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
app.use(express.static("/dist"));

//my-syte.com/filter
db.connect ('mongodb://heroku_prggrgt6:ur1cs7r3pkn13gc79or25d5p2f@ds117965.mlab.com:17965/heroku_prggrgt6', function (err) {
    if (err) {
        return console.log (err);
    }
    app.listen (port, function () {
        console.log ('API app started');
    });
});


