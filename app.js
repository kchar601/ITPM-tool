const express = require('express');
const path = require('path');
var cookie = require('cookie');
var mongoose = require('mongoose');
var {readFile} = require('fs/promises');
const app = express()
const port = 80
app.use(express.static('public'))

app.listen(port, () => {

  console.log(`Example app listening at http://localhost:${port}`)

})