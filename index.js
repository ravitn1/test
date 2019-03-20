'use strict'
const express = require('express');
const app = express();
const PORT = 3000;
const fs = require('fs');
let i;


app.get('/question1/:id', (req, res) => {
    console.log('hi', req.params.id)
    let value = req.params.id;
    if (value == true) {
        i = i + 1;
        res.send({
            "messages": [
                { "text": "Welcome to the Chatfuel Rockets!" },
                { "text": "What are you up to?" }
            ]
        })
    } else if (value == 'firstInFirstOut') {
        i = i + 1;
        res.send({
            "messages": [
                { "text": "Welcome to the Chatfuel Rockets!" },
                { "text": "What are you up to?" }
            ]
        })
    } else if (value == 'no') {
        i = i + 1;
        res.send({
            "messages": [
                { "text": "Welcome to the Chatfuel Rockets!" },
                { "text": "What are you up to?" }
            ]
        })
    }

})



app.get('/final', (req, res) => {
    if (i == 0) {
        res.send({
            "messages": [
                { "text": `you have answered ${i}/3 questions` },
            ]
        })
    }
    if (i == 1) {
        res.send({
            "messages": [
                { "text": `you have answered ${i}/3 questions` },
            ]
        })
    }
    if (i == 2) {
        res.send({
            "messages": [
                { "text": `you have answered ${i}/3 questions` },
            ]
        })
    }
    if (i == 3) {
        res.send({
            "messages": [
                { "text": `you have answered ${i}/3 questions` },
            ]
        })
    }

})


app.listen(PORT, () => {
    console.log(`server started at port ${PORT}`);
})