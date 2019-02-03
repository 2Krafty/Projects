const express = require("express");
const app = express();

app.use(express.static("public"));



app.get('/hello', function (req, res) {
  res.send('Hello Worlds');
});
app.listen(3000, function () {
  console.log('Chat App Listing on Port 3000!');
});