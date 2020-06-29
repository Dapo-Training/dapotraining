const express = require ('express');
const server = express();
const router = express.Router()
//const bodyParser = require('body-parser');

/*server.use(bodyParser.urlencoded({
    extended: true
}));
server.use(bodyParser.json());*/

//next line should be in the router page?
server.get('/',(req,res)=>{
    res.send('my server setup');
});
server.listen(4300);