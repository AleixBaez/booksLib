const  express = require ('express');
const app = express();
const db = require('./persistence');
const getEditions = require('./routes/getEditions');
const addEdition = require('./routes/addEdition');
const updateEdition = require('./routes/updateEdition');
const deleteEdition = require('./routes/deleteEdition');

app.use(express.json());
app.use(express.static(__dirname + '/static'));

app.get('/edition', getEditions);
app.post('/edition', addEdition);
app.put('/edition/:id', updateEdition);
app.delete('/edition/:id', deleteEdition);

db.init()
    .then(() => {
        app.listen(3000, () => console.log('Listening on port 3000'));
    })
    .catch((err) => {
        console.error(err);
        process.exit(1);
    });

const gracefulShutdown = () => {
    db.teardown()
        .catch(() => {})
        .then(() => process.exit());
};

process.on('SIGINT', gracefulShutdown);
process.on('SIGTERM', gracefulShutdown);
process.on('SIGUSR2', gracefulShutdown); // Sent by nodemon
