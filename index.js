// const mysql = require('mysql');
// const express = require('express');
// const app = express();

// const connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: '', // password for mysql user 'root'
//     database: 'test'
// });

// connection.connect((error) => {
//     if (!error) {
//         console.log('Database is connected...');
//     } else {
//         console.log('Error:', error);
//     }
// });

// app.listen(3030, function() {
//     console.log('Server on port: 3030');
// });

// app.get('/', (req, res) => {
//     res.send('Hello Internet!!!');
// });

// app.get('/query', (req, res) => {
//     connection.query('SELECT * FROM foo', (error, rows) => {
//         if (!error) {
//             res.json(rows[0]);
//         } else {
//             console.log('Error:', error);
//         }
//     });
// });

// app.get('/product/:id', (req, res) => {
//     res.send(`The id you requested is id:${req.params.id}`);
// });

// app.get('/message/:id', (req, res) => {
//     res.send(`The message you requested is this:${req.params.id}`);
// });

// ~+~ ~+~ ~+~

const express = require('express');
const app = express();

const cors = requrire('cors');
const router = require('./app/routes/router');

const port = 3030;
app.listen(port, () => {
    console.log(`Server is on port: ${port}`);
});

app.use(cors());
app.use(express.urlencoded());
app.use(express.json());

app.get('/', (req, res) => {
    res.json({
        'All Products': `http://localhost:${port}/`
    });
});

app.use('/api', router);