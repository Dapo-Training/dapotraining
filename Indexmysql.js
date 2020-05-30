require('mysql');
const connection = mysql.createConnection({
    select * from classroom.people;