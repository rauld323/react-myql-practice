const express = require('express');
const app = express();

app.get('/', (req, res) => {
	res.send('It is connected d');
});

app.listen(3001, () => {
	console.log('site running on PORT 3001');
});
