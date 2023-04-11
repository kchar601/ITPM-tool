const express = require('express');
const path = require('path');
var cookie = require('cookie');
var mongoose = require('mongoose');
var {readFile} = require('fs/promises');
const app = express()
const port = 80
app.use(express.static('public'))
const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

app.post('/sendtoGPT', async (req, res) => {
  var data = [
    {"role": "system", "content": "Using your IT project management skills to help provide risk management recommendations for Nittany Lion National Bank (a fictional bank)" },
    {"role": "user", "content": req.body.form-data}
  ];
  const completion = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [{role: "user", content: "Hello world"}],
  });
  console.log(completion.data.choices[0].message);
  return completion.data.choices[0].message;
})

