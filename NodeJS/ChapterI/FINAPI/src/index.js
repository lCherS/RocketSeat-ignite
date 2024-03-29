const express = require("express");
const { v4: uuidv4 } = require("uuid");

const app = express();

app.use(express.json());

/**
 * CPF - string
 * Name - string
 * id - uuid
 * statement - []
 */

const customers = [];

// Middlewares

function verifyIfExistsAccountCPF(req, res, next) {
  const { cpf } = req.headers;

  const customer = customers.find((customer) => customer.cpf === cpf);
  if(!customer)  res.status(400).json({ error: "Customer not found"})

  req.customer = customer;

  return next();
}

function GetBalance(statement) {
  const balance = statement.reduce((acc, operation) => {
    if(operation.type === "credit") {
      return acc + operation.amount;
    } else {
      return acc - operation.amount;
    }
  }, 0)

  return balance;
}


app.post("/account", (req, res) => {
  const { cpf, name } = req.body;

  const customerAlreadyExists = customers.some(
    (customer) => customer.cpf === cpf
  );

  if (customerAlreadyExists) {
    return res.status(400).json({
      error: "Customer already exists!",
    });
  }
  customers.push({
    cpf,
    name,
    id: uuidv4(),
    create_at: new Date(),
    statement: [],
  });
  return res.status(201).send();
});

app.get("/statement",verifyIfExistsAccountCPF, (req, res) => {
  const { customer } = req;

  return res.json(customer.statement);
});

app.post("/deposit",verifyIfExistsAccountCPF, (req, res) => {
  const { description, amount } = req.body;

  const { customer } = req;

  const statementOperation = {
    description,
    amount,
    create_at: new Date(),
    type: 'credit'
  }

  customer.statement.push(statementOperation);

  return res.status(201).send("sucesso");

})

app.post('/withdraw',verifyIfExistsAccountCPF, (req, res) => {
  const { amount } = req.body;
  const {customer} = req;
  const balance = GetBalance(customer.statement);

  if (balance < amount) {
    return res.status(400).json({error: "Insuficient founds!"})
  }

  const statementOperation = {
    amount,
    create_at: new Date(),
    type: 'debit'
  }

  customer.statement.push(statementOperation);

  return res.status(201).send('sacado');

})

app.get("/statement/date",verifyIfExistsAccountCPF, (req, res) => {
  const { customer } = req;
  const { date } = req.query;
  const dateFormat = new Date(date + " 00:00");

  const statement = customer.statement.filter((statement) => statement.create_at.toDateString() === new Date(dateFormat).toDateString())

  return res.json(statement);
});

app.put('/account',verifyIfExistsAccountCPF, (req, res) => {
  const { name } = req.body;
  const { customer } = req;

  customer.name = name;

  return res.status(201).send('alterado com sucesso!');
})

app.get("/account",verifyIfExistsAccountCPF, (req, res) => {
  const { customer } = req;

  return res.json(customers);
})

app.delete("/account",verifyIfExistsAccountCPF, (req, res) => {
  const { customer } = req;

  customers.splice(customer, 1)

  return res.status(200).json(customers);


})

app.get("/balance",verifyIfExistsAccountCPF, (req, res) => {
  const { customer } = req;
  const balance = GetBalance(customer.statement)

  return res.json(balance)
})

app.listen(3333);
