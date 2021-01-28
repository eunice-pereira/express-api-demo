# Express API Demo

Small demo creating Express back-end to then connect with React front-end.

## Get started...

```sh
npm init -y
npm i express morgan
touch index.js
```

## Set up basic Express app

```js
const http = require('http');
const express = require('express');

const app = express();
const server = http.createServer(app);

const port = 5000;
const host = 'localhost';

const morgan = require('morgan');
const logger = morgan('dev');

app.use(logger);

server.listen(port, host, () => {
	console.log(`Express API listening at: http://${host}:${port}`);
});
```

## Create initial .get request to confirm Express app is functioning properly

```js
app.get('/api', (req, res) => {
	res.json({
		status: 'hello world',
	});
});
```

Use Postman to check using GET request:

```sh
http://localhost:5000/api
```

Working 😊

![postman](./images/postman.png)
