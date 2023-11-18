const fullDate = require('./utilities/date')
const express = require('express');
const app = express();

const absolutePath = `${__dirname}/index.html`
const publicPath  = `${__dirname}/public`

const { getDateString, getTime } = fullDate

const cors = require('cors')

app.use(cors({optionsSuccessStatus: 200}));

app.use(express.static(publicPath));

app.get('/', (req, res) => {
    res.sendFile(absolutePath);
})

app.get('/api/:inputtedDate',  (req, res) => {
    const { inputtedDate } = req.params
    let data = inputtedDate;

    if (!data.split('').some((x) => x === '-')) {
       data = parseInt(data);
    }

    res.json({'unix': getTime(data), 'utc': getDateString(data)})
})

const listener = app.listen(process.env.PORT,() => {
    console.log({port: listener.address().port})
})