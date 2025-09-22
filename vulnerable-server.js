const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

// pretend "messages" is a database table
const messages = [];

app.post('/post', (req, res) => {
  // store the raw message (vulnerable)
  messages.push({ author: req.body.author, text: req.body.text });
  res.redirect('/board');
});

app.get('/board', (req, res) => {
  // render HTML directly with user-provided message text
  let html = '<h1>Message Board</h1>';
  messages.forEach(m => {
    html += ⁠ <div class="message"><strong>${m.author}:</strong> ${m.text}</div> ⁠;
  });
  res.send(html);
});
