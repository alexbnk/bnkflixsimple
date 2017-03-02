var express = require('express');
var app = express();
app.listen(8000);
app.use(express.static('.'))
//app.use(express.static('.',{index: 'appView.html'}))

