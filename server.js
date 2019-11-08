const express = require('express');

const app = express();

const cors = require('cors');

app.use(cors);

app.use(express.static('public'));

const port = process.env.PORT || 5000;
console.log('listening...' + port);
app.listen(port);
