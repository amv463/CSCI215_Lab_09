var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

var path = require("path");
app.get('/', function (req, res) {
    console.log('root called. Returning form.html');
    res.sendFile(path.join(__dirname+'/form.html'));
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});

app.post('/myPost', function(req, res) {
    console.log('post called. Returning data');
    console.log(req.body.name);
    console.log(req.body.email);
    console.log(req.body.age);
    console.log(req.body.skill);
    console.log(req.body.refer);
    console.log(req.body.comment);
    res.json({"testdata" : "This is data."});
});
