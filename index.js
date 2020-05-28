const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const peopleRouter = require('./routes/people');

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Welcome here!');
});

app.use('/people', peopleRouter);

console.log('Starting server on port 4300. Go to http://localhost:4300');
app.listen(4300);