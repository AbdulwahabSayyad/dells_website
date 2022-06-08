const path = require('path');
const fs = require('fs');

const port = 3000;
const express = require('express')
//const session = require('express-session')
const app = express()

//view engine
//app.set("view engine", "pug");

//set up the middleware and routes
app.use(express.json());
app.use(express.static('public'));

app.get("/", sendHomepage)
function sendHomepage(req,res,next){
    res.status(200);
    res.sendFile(path.join(__dirname, '/public/index.html'));
}

app.listen(port,()=>{
    console.log(`Listening at http://localhost:${port}`)
});