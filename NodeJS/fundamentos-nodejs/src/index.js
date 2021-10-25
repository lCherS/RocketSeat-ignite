const express = require('express');

const app = express();

/**
 * GET - busca
 * POST - insere
 * PUT - altera
 * PATCH - altera informação especifica
 * DELETE - deleta
 */

app.get("/", (req, res) => {
  return res.json({
    name: "hello"
  })
})

app.listen(3333);