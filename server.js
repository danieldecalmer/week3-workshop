var express = require('express');
var app = express();
var http = require('http').createServer(app);
var bodyParser = require('body-parser');

app.use(express.static(__dirname + '/www'));
app.use(bodyParser.urlencoded({ extended: true }));

let server = http.listen(3000, function () {
    let host = server.address().address;
    let port = server.address().port;
    console.log("My First Nodejs Server!");
    console.log("Server listening on: " + host + " port: " + port);
});

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/www/index.html');
});

app.get('/account', function (req, res) {
    res.sendFile(__dirname + '/www/account.html');
});

const users = [
    { email: "email1@example.com", password: "password1" },
    { email: "email2@example.com", password: "password2" },
    { email: "email3@example.com", password: "password3" }
];

app.post('/login', function (req, res) {
    const { email, password } = req.body;
    const user = users.find(user => user.email === email && user.password === password);

    if (user) {
        res.json({ valid: true });
    } else {
        res.json({ valid: false });
    }
});

app.get('/test', function (req, res) {
    res.sendFile(__dirname + '/www/test.html');
});
