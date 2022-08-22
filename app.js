const express = require("express")
const app = express()
const qr = require("qrcode")
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

app.post("/scan", (req, res) => {
    const url = req.body.url

    if (url.length === 0) {
        res.send("no url inserted")
    }
    qr.toDataURL(url, (err, data) => {
        if (err) {
            console.log(err)
        }
        res.render("scan", {
            data
        })
    })


})


app.listen(port, () => {
    console.log(`Listning to port ${port}`)
})