var app = require('express')(),
    bodyParser = require('body-parser'),
    email 	= require("./path/to/emailjs/email");
// Обратите внимание на используемый путь. Именно он задается в атрибуте action формы
app.use('/form_handler', bodyParser.urlencoded({
    extended: true
}));

// Обратите внимание на используемый путь. Именно он задается в атрибуте action формы
app.post('/form_handler', function(req, res, next) {
    // Объект req.body содержит данные из переданной формы
    var server 	= email.server.connect({
       user:    "username", 
       password:"password", 
       host:    "smtp.your-email.com", 
       ssl:     true
    });

    // send the message and get a callback with an error or details of the message that was sent
    server.send({
       text:    "i hope this works", 
       from:    "you <username@your-email.com>", 
       to:      "someone <someone@your-email.com>, another <another@your-email.com>",
       cc:      "else <else@your-email.com>",
       subject: "testing emailjs"
    }, function(err, message) { console.log(err || message); });
    console.dir(req.body);
});

