const http = require('http');
const express = require('express');

const app = express();
const server = http.createServer(app);

const port = 5000;
const host = 'localhost';

const morgan = require('morgan');
const logger = morgan('dev');

app.use(logger);

app.get('/api', (req, res) => {
	res.json({
		status: 'hello world',
	});
});

server.listen(port, host, () => {
	console.log(`Express API listening at: http://${host}:${port}`);
});
