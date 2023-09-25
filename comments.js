// Create web server

const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
const port = 3000;

let comments = [];

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/comments', (req, res) => {
    res.json(comments);
});

app.post('/comments', (req, res) => {
    let comment = req.body.comment;
    let user = req.body.user;
    let timestamp = new Date().toISOString();
    comments.push({comment: comment, user: user, timestamp: timestamp});
    res.json(comments);
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});