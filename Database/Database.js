//creating the database
var mysql=require('mysql');
var db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'kawabanga123@@',
    multipleStatements: true
});
db.connect(function(err){
    if(err)
        console.log('Connection failed');
    else
        console.log('Connection Succeeded');

})
db.query('DROP DATABASE IF EXISTS ExP');
db.query('CREATE DATABASE ExP');
db.query('USE ExP');
var db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'kawabanga123',
    database:'ExP',
    multipleStatements: true
});
//creating admin table
var sql = CREATE TABLE admin (
    email VARCHAR(45) PRIMARY KEY, 
    password VARCHAR(125)
);
//creating signup table
var sql = CREATE TABLE signUp (
    name VARCHAR(125),
    institution_name VARCHAR(125),
    email VARCHAR(45) PRIMARY KEY, 
    password VARCHAR(125), 
    phone_number INT
    );
//creating tables for school calendar 
var sql = CREATE TABLE school_calendar(
    event_name VARCHAR(125),
    description VARCHAR(256),
    select_date DATE, 
    id INT AUTO_INCREMENT PRIMARY KEY)
    );
//creating tables for class timetable 
var sql = CREATE TABLE period(
    period VARCHAR(125),
    id AUTO_INCREMENT PRIMARY KEY
    );
var sql = CREATE TABLE day_of_week(
    id INT AUTO_INCREMENT PRIMARY KEY,
    day VARCHAR(125)
    );
var sql = CREATE TABLE class(
    id INT AUTO_INCREMENT PRIMARY KEY,
    class_name VARCHAR(45)
    );
var sql = CREATE TABLE class_timetable(
    id INT PRIMARY KEY,
    class_name VARCHAR(125), 
    period_id INT, day_id INT
    );
//creating tables for billing and payments
var sql = CREATE TABLE invoices(
    item VARCHAR(125), 
    price INT, student_name VARCHAR(125), 
    id AUTO_INCREMENT PRIMARY KEY
    );
var sql = CREATE TABLE cashflow(
    pending INT, 
    processing INT, 
    collected INT, paid INT, 
    id AUTO_INCREMENT PRIMARY KEY
    )";
var sql = CREATE TABLE send_invoice(
    parent_email VARCHAR(125), 
    currency_type VARCHAR(125), 
    tax INT,id AUTO_INCREMENT PRIMARY KEY
    );
var sql = CREATE TABLE outstanding(
    student_names VARCHAR(125), 
    amount_owing INT, 
    id AUTO INCREMENT PRIMARY KEY
    );
//creating tables for enrollment
var sql = CREATE TABLE add_student(
    add_class VARCHAR(125), 
    student_name VARCHAR(125), 
    student_id VARCHAR(125) AUTO_INCREMENT PRIMARY KEY,
    mother_name VARCHAR(125),
    mother_email VARCHAR(125),
    mother_num INT,father_name VARCHAR(125), 
    father_email VARCHAR(125), 
     father_num INT
     );
//creating tables for classrooms
var sql = CREATE TABLE classrooms(
    add_classroom VARCHAR(125), 
    classrooms VARCHAR(125) PRIMARY KEY,
    classes_created_so_far VARCHAR(125), 
    programmes VARCHAR(125)
     );
//creating tables for students
var sql = CREATE TABLE students(
    student_id INT AUTOINCREMENT PRIMARY KEY,
    student_name VARCHAR(45),
    student_class VARCHAR(45)
    );
//creating tables for teachers
var sql = CREATE TABLE teachers(
    teacher_id INT PRIMARY KEY,
    teacher-name VARCHAR(125)
    );
//creating tables for daily reports
 var sql = CREATE TABLE daily_report(
     date DATE,
     report_name VARCHAR(125),
     report BLOB,
    );
 //creating tables for statistics
 var sql = CREATE TABLE statistics(
     mesages_sent INT,
     events_sent INT, 
     students_joined INT, 
     teachers_joined INT
     );
     
