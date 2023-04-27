const express = require('express');
const app = express();
const db = require('./src/utilities/dbConfig');

const port = 5001;
app.use(express.json());

const userRoutes = require('./src/routes/user.routes');

app.get('/', (req, res) => {
    res.send('Oqvest api working');
});

app.use('/user', userRoutes);

app.use(function (err, req, res, next) {
    if (err instanceof NotFoundError) {
        res.status(404).json({ error: 'Not found' });
    } else if (err instanceof AnotherCustomError) {
        res.status(400).json({ error: err.message });
    } else {
        res.status(500).json({ error: 'Server error' });
    }
});

app.use(function (err, req, res, next) {
    // handle the error
    next();
});

app.listen(port, () => {
    console.info(`Server running on port: ${port}`);
})