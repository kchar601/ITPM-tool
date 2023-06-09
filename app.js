const express = require('express');
const path = require('path');
var cookie = require('cookie');
var mongoose = require('mongoose');
var {readFile} = require('fs/promises');
const bodyParser = require('body-parser');
const app = express()
const port = 80
app.use(express.static('public'))
const { Configuration, OpenAIApi } = require("openai");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const configuration = new Configuration({
  apiKey: "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",
});
const openai = new OpenAIApi(configuration);


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

app.post('/sendtoGPT', async (req, res) => {
  const messages = [];
  
  for (const key in req.body) {
    const question = key;
    const answer = req.body[key];
    
    messages.push({ role: "user", content: `${question} ${answer}` });
  }
  
  const data = [
    { role: "system", content: "Using your IT project management skills to help provide risk management recommendations for Nittany Lion National Bank (a fictional bank)" },
    ...messages
  ];
  
  try {
    const completion = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: data,
    });
    
    console.log(completion.data.choices[0].message);
    res.send(completion.data.choices[0].message);
  } catch (err) {
    console.log(err);
  }
});

