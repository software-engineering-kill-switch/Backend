//dynamic route
const router = app => {
	/*app.get('/users/:id', (request, response) => {
		const id = request.params.id;
		pool.query('SELECT * FROM users WHERE id = 4', (error, result) => {
			if (error) throw error;
			response.send(result);
		});
	});*/
	app.post('/users', (request, response) => {
		pool.query('INSERT INTO users SET ?', request.body, (error, result) => {
			if (error) throw error;
			response.status(201).send(`user added with id: ${result.insertid}`);
		});
	});
	/*app.put('/users/:id', (request, reponse) => {
		const id = request.params.id;
		pool.query('UPDATE users SET ? WHERE id = ?', [request.body, id], (error, result) => {
			if (error) throw error;
			response.send('user updated successfully');
		});
	});*/
	/*app.delete('/users/:id', (request, response) => {
		const id = request.params.id;
		pool.query('DELETE FROM users WHERE id = ?', id, (err, result) => {
			if (error) throw error;
			response.send('user deleted');
		});
	});*/
};
module.exports = router;

var home = require("os").homedir();
var logpath = home + '/Documents/node.js/config.js';
const pool = require(logpath);

const users = [{
	pool
}];
