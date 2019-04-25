var home = require("os").homedir();
var logpath = home + '/Documents/node.js/routes.js';
const routes = require(logpath);
const express = require('express');
const port = 3002;
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true,
}));

routes(app);

const server = app.listen(port, (error) => {
	if (error) return console.log(`error: ${error}`);
	console.log(`server listening on port ${server.address().port}`);
});
