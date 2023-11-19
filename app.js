const express = require('express');
const cors = require('cors')

const app = express();

const absolutePath = `${__dirname}/views/index.html`

app.use(cors({optionsSuccessStatus: 200}));
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(absolutePath);
})

app.get('/api/:inputtedDate',  (req, res) => {
    const { inputtedDate } = req.params
    const dateFormat = isNaN(inputtedDate) ? inputtedDate : parseInt(inputtedDate)
    const date = new Date(dateFormat);
    res.json({
        'unix': date.getTime(),
        'utc': date.toUTCString()
    })
})

const listener = app.listen(process.env.PORT,() => {
    console.log({port: listener.address().port})
})