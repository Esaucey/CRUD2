require("dotenv").config()

const mongoose = require("mongoose")
const express = require("express")
const peopleRouter = require("./routes/peopleRouter")

const app = express()

app.use(express.json())
app.use("/api/people", peopleRouter)

mongoose.connect(process.env.MONGO_URL)
.then(() => {
  app.listen(process.env.PORT, () => console.log(`app is listing ${process.env.PORT}`))
})