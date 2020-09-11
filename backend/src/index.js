const express = require ('express');
const routes = require ('./routes'); //importando rotas
const bodyParser = require('body-parser')

const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json({ limit: '15MB' }))
app.use(routes);

app.listen(3333);