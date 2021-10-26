const express  = require('express');;
const { v4: uuidv4 } = require('uuid');

const app = express();

app.use(express.json());

/**
 * CPF - string
 * Name - string
 * id - uuid
 * statement - []
 */

const customers = [];

app.post("/account", (req, res) => {
  const {cpf, name} = req.body; 
  const id = uuidv4;

  customers.push({
      cpf,
      name,
      id,
      statement: []
    });

    console.log(customers);

    return res.status(201).send();
});

console.log('hello')
app.listen(3333);


