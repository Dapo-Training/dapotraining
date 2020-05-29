const express = require('express');
const router = express.Router()
const connection = require('../connection');


router.get('/', (req, res) => {
    connection.query('SELECT * FROM people', (error, results) => {
        res.send(results);
    });
});

router.post('/', (req, res) => {
    const data = req.body;
    const sql = 'INSERT INTO people (first_name, last_name, email, age, gender) VALUES(?, ?, ?, ?, ?)';
    connection.query(sql, [data.first_name, data.last_name, data.email, data.age, data.gender], (error, results) => {
        if (error) {
            console.log(error);
        }
        res.send(results);
    });
});

router.get('/:id', (req, res) => {
    connection.query('SELECT * FROM people WHERE id=?', [req.params.id], (error, results) => {
        res.send(results[0]);
    });
});

module.exports = router;
