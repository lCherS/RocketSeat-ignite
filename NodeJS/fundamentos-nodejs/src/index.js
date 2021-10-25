const express = require('express');

const app = express();

/**
 * GET - busca
 * POST - insere
 * PUT - altera
 * PATCH - altera informação especifica
 * DELETE - deleta
 */

app.get("/courses", (req, res) => {
  return res.json(["Curso 1", "Curso 2", "Curos 3"])
})

app.post('/courses', (req, res) => {
  return res.json(["Curso 1", "Curso 2", "Curos 3", "Curso 4"])
})

app.put('/courses/:id/:nome', (req, res) => {
  const id = req.params.id;
  const nome = req.params.nome;
  let cursos = ["Curso 1", "Curso 2", "Curos 3", "Curso 4"];
  cursos[id] = nome;

  return res.json(cursos);
})

app.patch("/courses/:id", (req, res) => {
  return res.json(["Curso 5", "Curso 2", "Curos 3", "Curso 4"])
})

app.delete("/courses/:id", (req, res) => {
  const id = req.params.id;
  let cursos = ["Curso 1", "Curso 2", "Curos 3", "Curso 4"];

  return res.json(cursos);
})

app.listen(3333);