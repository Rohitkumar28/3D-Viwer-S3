require('dotenv').config()
const app = require("./src/app")
const connectDb = require("./src/config/db")

connectDb()

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`Server is start on port ${PORT}`)
})