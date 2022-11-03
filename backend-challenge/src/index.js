require('dotenv').config();
const express = require('express');
var cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json({ extended: true }));


app.get('', (req, res) => res.send('SERVER STARTED!!!'));
app.use('/api', require('./routes/index'));

(function start() {
    try {
        app.listen(PORT, () => console.log(`PORT is ${PORT}...`));
    } catch (err) {
        console.log(err.stack);
    }
})();

module.exports = app;
