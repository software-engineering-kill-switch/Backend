var mysql = require('mysql');
var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var app=express();
var connection = mysql.createConnection({
    host: 'localhost',
    user: '', //User's name goes here
    password: '',
    database: 'admin'
});
var connection_1 = mysql.createConnection({
    host: 'localhost',
    user: '',//User's name goes here
    password: '',//User's password goes here
    database: 'students'
});
app.use(session({
    secret: 'secret',//Tracking the user's activities with sessions
    resave: true,
    saveUninitialized: true
}));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());//Parsing incoming requests 
app.get('/login',function(req,res){
    //login form appears here
})
app.post('/login/auth',function(res,req){
    var email = req.body.username;
    var password = req.body.password;
    if (email && password) {
        connection.query('SELECT * FROM admin WHERE email = ? AND password = ?', [email, password], function (error, results, fields) {
            if (results.length > 0) {
                req.session.loggedin = true;
                var login = req.session.loggedin;
                req.session.email = email;
            } else {
                res.send('Incorrect email and/or Password!');
            }
            res.end();
        });
    } else {
        res.send('Please enter email and Password!');
        res.end();
    }
});

app.post('/shwstdnts',function(res,req){  //Get the class name from the admin
    if(login)
    {
        var class_name = req.body.class;
        //checking if such class exists in the database if not let the user re enter it
        //and html file for the admin to enter the class name so that searching through the database will be easy
    }
    else{
        res.redirect('/')
        res.end
    }
    //
})
app.get('/shwstdnts/:class_name',function(req,res){
    connection_1.query("SELECT student_name  FROM students WHERE student_class=?",[req.params.class_name],function(err,results,fields){
        if(results==0)
        {
            var err = new Error("NO SUCH CLASS AVAILABLE");
            err.status = 404;
            return res.end();
        }
    
    } 
)
}
)
//daily reports left