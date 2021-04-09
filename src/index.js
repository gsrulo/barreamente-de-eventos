const express = require('express');
//para enviar eventos para os demais microsserviços
const axios = require('axios');
const app = express();
app.use(express.json());

app.post("/eventos", (req, res) => {
    console.log(req.body);
    res.status(200).send({
        msg: "OK"
    });
});

app.listen(10000, () => {
    console.log('Barramento de eventos. Porta 10000.')
})