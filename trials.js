const express = require('express');
const app = express();
const waitPort = require('wait-port');
const fs = require('fs');
const { Client } = require('pg');
const bo = require('./bo');
const { EditionBO } = require('./bo');
require('dotenv').config();

const {
    POSTGRES_USER: USER,
    POSTGRES_PASSWORD: PASSWORD,
    PSQL_DB_PORT: PORT,
    PGHOST: HOST,
    PGDATABASE: DATABASE,
} = process.env;

const myCilent = new Client({
    host: HOST,
    port: PORT,
    user: USER,
    password: PASSWORD,
    database: DATABASE,
    statement_timeout: 1000, // number of milliseconds before a statement in query will time out, default is no timeout
    query_timeout: 1000, // number of milliseconds before a query call will timeout, default is no timeout
    application_name: 'Sergio', // The name of the application that created this Client instance
    connectionTimeoutMillis: 2000, // number of milliseconds to wait for connection, default is no timeout
    idle_in_transaction_session_timeout: 2000,
});

let myEdition = new EditionBO(
    'Mil anos de sobriedad',
    'Garcia Marquez',
    'Barcanova',
    'spqr',
    'ca',
    'pap',
    new Date('2022-03-25'),
    new Date('2020-3-14'),
);

myCilent
    .connect()
    .then((res) => {
        console.log('connected');
    })
    .catch((err) => console.error('connection error', err.stack));

myCilent
    .query('CREATE TABLE IF NOT EXISTS ' + bo.EditionBO.sqlTableDef() )
    .then((res) => {
        console.log(res);
    })
    .catch((e) => console.error(e.stack));

myCilent
    .query(
        'INSERT INTO ' +
            EditionBO.sqlTableName() +
            ' VALUES ' +
            EditionBO.sqlParameters(),
        myEdition.toPostgres()
    )
    .then((res) => {
        console.log(res.rows[0]);
    })
    .catch((e) => console.error(e.stack));

myCilent
    .query('SELECT * FROM ' + EditionBO.sqlTableName())
    .then((res) => console.log(res.rows[0]))
    .catch((e) => console.error(e.stack));

/*client
    .end()
    .then(res => console.log('client has disconnected'))
    .catch((err) => console.error('error during disconnection', err.stack));

/*
async function init(){
    await waitPort({ 
        host: HOST, 
        port: PORT,
        timeout: 10000,
        waitForDns: true,
    });
};

app.use(express.json());
app.use(express.static(__dirname + '/static'));

app.listen(3000, () => console.log('Listening on port 3000'));*/
