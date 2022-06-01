var express = require('express');
var app = express();
const port = process.env.PORT || 3000
const pokemon = require("./routes/pokemon")



app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use("/api/pokemon", pokemon)

app.listen(port, function () {
    console.log(`servicio 4 funcionando en el puerto ${port}`)
});