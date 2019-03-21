'use strict'
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const fs = require('fs');
let i = 0;


app.get('/', (req, res) => {
   
    if (Object.keys(req.query)[0] == 'quiz-verify') {
        i = i + 1;
        res.send('')
    }
    if (Object.keys(req.query)[0] == 'final') {
        let value = i;

        if (value == 0) {
            i = 0;
            res.send({
                "messages": [
                    { "text": `you have answered ${value}/3 questions` },
                    {
                        "attachment":
                        {
                            "type": "image", "payload":
                            {
                                "url": "http://personabots.com/kekelost2.gif"
                            }
                        }
                    },
                ]

            })
        }
        if (value == 1) {
            i = 0;
            res.send({
                "messages": [
                    { "text": `you have answered ${value}/3 questions` },
                    {
                        "attachment":
                        {
                            "type": "image", "payload":
                            {
                                "url": "http://personabots.com/kekelost2.gif"
                            }
                        }
                    },
                ]
            })
        }
        if (value == 2) {
            i = 0;
            res.send({
                "messages": [
                    { "text": `you have answered ${value}/3 questions` },
                    {
                        "attachment":
                        {
                            "type": "image", "payload":
                            {
                                "url": "http://personabots.com/kekelost2.gif"
                            }
                        }
                    },
                ]
            })
        }
        if (value == 3) {
            i = 0;
            res.send({
                "messages": [
                    { "text": `you have answered ${value}/3 questions` },
                    {
                        "attachment":
                        {
                            "type": "image", "payload":
                            {
                                "url": "http://personabots.com/kekelost2.gif"
                            }
                        }
                    },
                ]
            })
        }

    }

})



app.listen(PORT, () => {
    console.log(`server started at port ${PORT}`);
})