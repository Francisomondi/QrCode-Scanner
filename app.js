const express = require("express")
const app = express()
const port = process.env.port || 3000;
const bodyparser = require("body-parser")

app.set("view engine", "ejs")
app.use(bodyparser.urlencoded({
    extended: false
}))
app.use(bodyparser.json())

app.get("/", (req, res) => {
    res.render("index")
})


app.listen(port, () => {
    console.log(`Listning to port ${port}`)
})