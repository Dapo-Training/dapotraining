const express = require('express');
const app = express();

app.get('/' , (req, res) => {
   res.send ('<b>This is me answering the get call to my root</b>');
})

app.post('/' , (req, res) => {
    const people = [
        {
            firstName: 'Thor',
            lastName: 'Odinson',
            gender: 'Godly Man',
            age: 1500

        },
        {
            firstName: 'Loki',
            lastName: 'Laufeyson',
            gender: 'Fluid',
            age: 1500   
        }
    ]






    res.send (people);
})
console.log ('startng server on port 4300. got to http://localhost:400');
app.listen(4300);