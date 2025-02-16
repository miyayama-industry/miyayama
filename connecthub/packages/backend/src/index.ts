import express from 'express';

const app = express();
const port = 3000;

app.get('/', (reg, res) => {
    res.send('Hello, Backend!');
});

app.listen(port, () => {
    console.log('Backend listening at http://localhost:${port}');
});


