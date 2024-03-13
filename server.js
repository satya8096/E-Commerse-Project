const app = require('./index');
require('./DB')
const express = require('express')
const cors = require('cors');
const app1 = express(); 
app1.use(cors())

app.listen(process.env.PORT,(err)=>{
    if(!err){
        console.log("server running at " + process.env.PORT || 4000);
    }
    else{
        console.log(err.message);
    }
})