var express = require('express');
var app = express();

app.get('/',function(req,res){
    res.send('chupa... consegui fazer a poha do Hello World funfar suahsuahsaush');
});

app.listen(3000);