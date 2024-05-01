const express = require("express")
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const app = express()
const mainRoute = require("./routes/index")
const port = 5000;


dotenv.config();

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI)
    console.log("Connected to mongoDb")
  } catch (error) {
    throw error
  }
}

app.use("/api", mainRoute)

app.listen(5000, () => {
  connect()
  console.log(`Sunucu ${5000} portunda çalışıyor.`)
})