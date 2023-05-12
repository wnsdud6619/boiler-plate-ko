const express = require('express');
const app = express();
const port = 5000;

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://JunYoungKim:abcd1234@atlascluster.yyu65uz.mongodb.net/?retryWrites=true&w=majority', {})
.then(() => console.log('MongoDb Connnceted...'))
.catch(err => console.log(err));

app.get('/', (req, res) => res.send('Hello World! test'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));