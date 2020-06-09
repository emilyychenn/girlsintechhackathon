///GA implemntting mysql
var mysql = require('mysql');
var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var path = require('path');

var connection = mysql.createConnection({
	host     : 'localhost',
	user     : 'root',
	password : '',
	database : 'user'
});

var app = express();
app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

app.get('/', function(request, response) {
	response.sendFile(path.join(__dirname + '/login.html'));
});

app.post('/auth', function(request, response) {
	var username = request.body.username;
	var password = request.body.password;
	if (username && password) {
		connection.query('SELECT * FROM accounts WHERE username = ? AND password = ?', [username, password], function(error, results, fields) {
			if (results.length > 0) {
				request.session.loggedin = true;
				request.session.username = username;
				response.redirect('/home');
			} else {
				response.send('Incorrect Username and/or Password!');
			}			
			response.end();
		});
	} else {
		response.send('Please enter Username and Password!');
		response.end();
	}
});

app.get('/home', function(request, response) {
	if (request.session.loggedin) {
		response.send('Welcome back, ' + request.session.username + '!');
	} else {
		response.send('Please login to view this page!');
	}
	response.end();
});

app.listen(3000);












/// Hannah version///
// $('#loginForm').on('submit',(e) => {
//     e.preventDefault();
//     let hash = {};
//     let arg = ['name','email','password'];
//     arg.forEach((name) => {
//         let value = $('#loginForm').find(`[name= ${name}]`).val();
//         hash[name] = value;
//     })
//     $('#loginForm').find('.error').each((index,span) => {
//         $(span).text('');
//     })
//     if(hash['email'] === ''){
//         $('#loginForm').find('[name = "email"]').siblings('.error').text('Please enter email');
//         return
//     }
//      if(hash['password'] === ''){
//         $('#loginForm').find('[name = "password"]').siblings('.error').text('Please enter password');
//         return
//     }
//     $.post('/login',hash).then((response) =>{console.log(response)},
//         (request) => {
//         let {errors} = request.responseJSON;
//         if(errors.email  &&  errors.email === 'invalid'){
//            $('#loginForm').find('[name = "email"]').siblings('.error').text('Invalid Email');
//         }
//         })
//     })