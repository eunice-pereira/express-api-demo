const http = require('http');
const express = require('express');

const app = express();
const server = http.createServer(app);

const port = 5000;
const host = 'localhost';

const morgan = require('morgan');
const logger = morgan('dev');

let number = 0;

app.use(logger);

app.get('/api', (req, res) => {
	res.json({
		status: 'hello world',
	});
});

app.get('/api/counter', (req, res) => {
	res.json({
		value: number,
	});
});

app.post('/api/counter', (req, res) => {
	number++;
	res.json({
		status: 'incremented',
		value: number,
	});
});

app.put('/api/counter', (req, res) => {
	number--;
	res.json({
		status: 'decremented',
		value: number,
	});
});

app.delete('/api/counter', (req, res) => {
	number = 0;
	res.json({
		status: 'reset',
		value: number,
	});
});

server.listen(port, host, () => {
	console.log(`Express API listening at: http://${host}:${port}`);
});
