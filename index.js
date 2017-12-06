/**
 * Created by cw on 2017/12/1.
 */
var express = require('express');
var app = express();

app.get("/test", function (req, res) {
    console.log("test");
    res.sendFile('./src.zip',{root : __dirname});
});

app.get('/version', function (req, res) {
    res.send(JSON.stringify({version:2}));
});

app.listen("8082");