/*var mysql = require('mysql');

var con = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '11661166',
	insecureauth : true
});

con.connect(function(err) {
	if (err) throw err;
	console.log('connected!');
});*/

/*var mysql = require('mysql');

var con = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '11661166',
});

con.connect(function(err){
	if (err) throw err;
	console.log('connected!');
	con.query('CREATE DATABASE killswitch_db',
		function(err, result){
			if (err) throw err;
			console.log('database created');
		});
});*/

/*var mysql = require('mysql');

var con = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '11661166',
	database: 'killswitch_db'
});

con.connect(function(err) {
	if (err) throw err;
	console.log('connected!');
	var sql = 'CREATE TABLE user_registration (FIRST_NAME varchar(255), LAST_NAME varchar(255), EMAIL varchar(255), MOBILE_NUMBER int(15), USERNAME varchar(255), PASSWORD varchar(255))';
	con.query(sql, function (err, result) {
		if (err) throw err;
		console.log('table created');
	});
});*/

/*var mysql = require('mysql');

var con = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '11661166',
	database: 'killswitch_db'
});

con.connect(function(err) {
	if (err) throw err;
	console.log('connected!');
	var sql = 'INSERT INTO user_registration (FIRST_NAME, LAST_NAME, EMAIL, MOBILE_NUMBER, USERNAME, PASSWORD) VALUES ("jake", "keith", "jk@gmail.com", "1234", "jk", "stilljk")';
	con.query(sql, function (err, result) {
		if (err) throw err;
		console.log('1 record inserted');
	});
});*/

/*var mysql = require('mysql');

var con = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '11661166',
	database: 'killswitch_db'
});
con.connect(function(err) {
	if (err) throw err;
	console.log('connected!');
	var sql = 'INSERT INTO user_registration (FIRST_NAME, LAST_NAME, EMAIL, MOBILE_NUMBER, USERNAME, PASSWORD) VALUES ?';
	var values = [
	["Jason", "Blue", "jayblue@gmail.com", "1010", "Jason", "jblue"],
	["Max", "Damon", "damonm@gmail.com", "1011", "Max", "mdamon"],
	["Leo", "Vin", "levin@gmail.com", "1111", "Leo", "lvin"],
	["Kate", "Frost", "katefrost@gmail.com", "0111", "Kate", "kfrost"],
	];
	con.query(sql, [values], function (err, result) {
		if (err) throw err;
		console.log('number of records inserted: ' + result.affectedRows);
	});
});*/

var mysql = require('mysql');

var con = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '11661166',
	database: 'killswitch_db'
});

con.connect(function(err) {
	if (err) throw err;
	con.query('SELECT * FROM user_registration', function (err, result, fields) {
		if (err) throw err;
		console.log(result);
	});
});

/*var mysql = require('mysql');

var con = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '11661166',
	database: 'killswitch_db'
});

con.connect(function(err) {
	if (err) throw err;
	var sql = 'UPDATE user_registration SET USERNAME = "Jake" WHERE USERNAME = "jk"';
	con.query(sql, function (err, result) {
		if (err) throw err;
		console.log(result.affectedRows + 'record(s) updated');
	});
});*/

/*var mysql = require('mysql');

var con = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '11661166',
	database: 'killswitch_db'
});

con.connect(function(err) {
	if (err) throw err;
	var sql = 'DELETE FROM user_registration WHERE FIRST_NAME = "jake"';
	con.query(sql, function (err, result) {
		if (err) throw err;
		console.log('number of records deleted: ' + result.affectedRows);
	});
});*/