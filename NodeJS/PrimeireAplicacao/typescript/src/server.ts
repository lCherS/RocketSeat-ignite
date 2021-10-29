import express from 'express';

const app = express();

app.get("/", (req, res) => {
  return res.json( {message: "hello Wolrd"})
})

app.listen(3333);