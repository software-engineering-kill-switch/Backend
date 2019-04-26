const router = app => {
	app.get('/users', (request, response) => {
		pool.query('SELECT * FROM users', (error, result) => {
			if (error) throw error;
			response.send(result);
		});
	});
};
module.exports = router;

var home = require("os").homedir();
var logpath = home + '/Documents/node.js/config.js';
const pool = require(logpath);

const users = [{
	pool
}];