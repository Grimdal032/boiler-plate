const express = require("express")
const app = express()
const port = 3000

const mongoose = require("mongoose")
mongoose.connect("mongodb+srv://ksw0627:asdf1234@cluster0.ohp872o.mongodb.net/?retryWrites=true&w=majority", {
  useNewUrlParser: true, useUnifiedTopology: true,
}).then(() => console.log("MongoDB Connected..."))
  .catch(err => console.log(err))

app.get('/', (req, res) => res.send("hi!"));
app.listen(port, () => console.log(`${port}번 포트에서 시작합니다!.`));