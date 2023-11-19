const express = require('express');
const cors = require('cors')

const app = express();

const absolutePath = `${__dirname}/views/index.html`

app.use(cors({optionsSuccessStatus: 200}));
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(absolutePath);
})

function isValidDate(str) {
    const parsedDate = new Date(str);
    return parsedDate.toString() !== 'Invalid Date'
}

app.get('/api/timestamp/:date?',  (req, res) => {
    const { date } = req.params
    const dateFormat = isNaN(date) ? date : parseInt(date);
    let dateQuery = new Date(dateFormat);

    if (isValidDate(dateFormat) || !req.params.date) {
        if (!req.params.date) {
            dateQuery = new Date();
        }

        res.json({
            'unix': dateQuery.getTime(),
            'utc': dateQuery.toUTCString()
        })
    } else {
        res.json({
            "error": "Invalid Date"
        })
    }
})

const listener = app.listen(process.env.PORT,() => {
    console.log({port: listener.address().port})
})

