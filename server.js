var express = require('express');
var app = express();
var path = require('path');
var port = 8800;
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.get('/', function(req, res){
    // res.send('Hello, InterIIT Website is in Progress.');
    res.render(path.join(__dirname,'public/templates/index'));
});
app.get('/index', function(req, res){
    // res.send('Hello, InterIIT Website is in Progress.');
    res.render(path.join(__dirname,'public/templates/index'));
});

app.get('*', function (req, res) {
    res.render(path.join(__dirname,'public/templates/views/not_exist'));
});

app.listen(port, function(){
        console.log('Running on port', port);
});
