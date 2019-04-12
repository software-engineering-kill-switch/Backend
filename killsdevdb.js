//test to connect to dummy database
/*var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "kawabanga123@@",
    database: "sakila",
    port:3306,
    insecureAuth: true
});

con.connect(function(err){
    if(err) throw err;
    console.log("Connected!");
});*/

//creating databse
/*var mysql = require ('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "kawabanga123@@",
});

con.connect(function(err){
    if(err) throw err;
    console.log('Connected!');
    con.query("CREATE DATABASE killsdevdb",
function(err, result){
    if (err) throw err;
console.log("Database created");
});
});*/

//creating tables in database
/*var mysql = require('mysql');

var con = mysql.createConnection({
   host: "localhost",
  user: "root",
  password: "kawabanga123@@",
   database: "killsdevdb"
 });

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
   var sql = "CREATE TABLE user_registration (first_name VARCHAR(255), last_name VARCHAR(255), email VARCHAR(255), mobile_number INT(15), username VARCHAR(255), password VARCHAR(255)) ";
   con.query(sql, function (err, result) {
    if (err)  throw err;
    console.log("Table created");
  });
});
*/

//ALTERING DATABASE TABLE
var mysql = require('mysql');

var con = mysql.createConnection({
   host: "localhost",
  user: "root",
  password: "kawabanga123@@",
   database: "killsdevdb"
 });

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "ALTER TABLE user_registration ADD COLUMN id INT AUTO_INCREMENT PRIMARY KEY";
  con.query(sql, function (err, result) {
    if (err)  throw err;
    console.log("Table altered");
  });
});

