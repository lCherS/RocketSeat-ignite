const express = require('express');

const app = express();

app.get("/", (req, res) => {
  return res.json({
    name: "hello"
  })
})

app.listen(3333);