const express = require('express');
const app = express();
const request = require('request')

app.get('/lista/medalhas', (req, res, next) => {
    var data = {
        "template": { "name" : "array" },
        "data" : {
            "items" : [{
                "name": "Lucas",
                "grau": "sargento 1"
            },
            {
                "name": "Ana",
                "grau": "Sargento 2"
            },
            {
                "name": "Luiza",
                "grau": "Sargento 3"
            },
        ]
        }
        }
    var options = {
        uri: 'http://localhost:5488/api/report',
        method: 'POST',
        json: data
    }
    request(options).pipe(res)
});


app.get('/medalha', (req, res, next) => {
    var data = {
        "template": { "name" : "lista" },
        "data" : {
            "items" : [{
            "to": "eu",
            "from": "voce",
            "price": 500
        },
        {
            "to": "eu2",
            "from": "voce2",
            "price": 5002
        }
        ]
        }
        }
    var options = {
        uri: 'http://localhost:5488/api/report',
        method: 'POST',
        json: data
    }
    request(options).pipe(res)
});

app.listen(3000, () => console.log('http://localhost:3000'))
