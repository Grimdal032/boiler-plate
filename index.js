const express = require("express")
const app = express()
const port = 3000
const bodyParser = require("body-parser")

const config = require("./config/key")

const { User } = require("./models/User.js")

// application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// application/json
app.use(bodyParser.json());

const mongoose = require("mongoose")
mongoose.connect(config.mongoURI, {
  useNewUrlParser: true, useUnifiedTopology: true,
}).then(() => console.log("MongoDB Connected..."))
  .catch(err => console.log(err))

app.get('/', (req, res) => res.send("hi!"));

app.post('/register', (req, res) => {
  // 회원가입시 필요한 정보를 client에서 가져오면
  // 그것들을 DB에 넣어준다
  try{
    const user = new User(req.body);
    user.save();
    return res.status(200).json({ success: true });
  }catch(err) {
    return res.json({ success: false, err })
  }
})

app.listen(port, () => console.log(`${port}번 포트에서 시작합니다!.`));