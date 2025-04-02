import express from "express";
import dotenv from "dotenv";
 
const app = express()
const PORT = process.env.PORT || 4003;
dotenv.config();
app.get('/', (req, res) => {
  res.send('Hello  vivek kumar !')
})

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})