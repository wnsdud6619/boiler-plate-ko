const express = require('express');
const app = express();
const port = 5000;
const bodyParser = require('body-parser');
const config = require('./config/key');
const { User } = require('./models/User');

//09:11
//application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extened: true}));
//application/json
app.use(bodyParser.json());

const mongoose = require('mongoose');
console.log('mongoURI = ' + config.mongoURI);
mongoose.connect(config.mongoURI, {}) 
.then(() => console.log('MongoDb Connnceted...'))
.catch(err => console.log(err));


app.get('/', (req, res) => res.send('Hello World! 수정 테스트'));

app.post('/register', async (req, res) => {
    // 회원 가입 할때 필요한 정보들을 client에서 가져오면
    // 그것들을 데이터 베이스에 넣어준다.
    
    const user = new User(req.body);

    await user.save()
    .then(() => {
        res.status(200).json({
            success: true,
        });
    })
    .catch((err) => {
        console.error(err);
        res.json({
            success: false,
            err: err,
        })
    });
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`));