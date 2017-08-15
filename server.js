var express = require('express');
var app = express();
var port = 2536;
app.get('/', function(req, res){
        res.send('Hello, InterIIT Website is in Progress.');
});

app.listen(port, function(){
        console.log('Running on port', port);
});
