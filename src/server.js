const express = require('express');
const ejs = require('ejs');
const pdf = require('html-pdf');
const path = require('path');

const app = express();

const passengers = [
  {
    name: 'John Smith',
    flightNumber: 7859,
    time: "18:00:00"
  },
  {
    name: 'Brock Smith',
    flightNumber: 7859,
    time: "18:00:00"
  },
  {
    name: 'Eve Smith',
    flightNumber: 7859,
    time: "18:00:00"
  },
]

app.get('/', (req, res) => {
  ejs.renderFile(
    path.join(__dirname, "print.ejs" ),
    {passengers},
    (err, html) => {
      if(err){
        return res.send('Erro na leitura do arquivo');
      }

      const options = {
        height: "11.25in",
        width: "8.5in",
        header: {
          height: "20mm",
        },
        footer: {
          height: "20mm",
        }
      }

      // criar pdf
      pdf.create(html, options).toFile("report.pdf", (err, data) => {
        if(err){
          return res.send('Erro ao gerar pdf');
        }

        return res.send(html);
      })

    }
  )
});

app.listen(3000, () => console.log('http://localhost:3000'))