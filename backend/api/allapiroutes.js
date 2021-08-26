var express = require('express');
const app = express.Router();
var course= require('./courses.js');
var shorturl=require('./urlshorter');

app.use("/course",course);
app.use("/shorturl",shorturl);

module.exports=app;