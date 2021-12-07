const express = require('express')
const app = express()
const port = 5000

app.get('/api', (req, res) => {
  const data = [
    {
      id: 1,
      firstname: "steven",
      lastname: "yoh",
    },
    {
      id: 2,
      firstname: "peter",
      lastname: "yoh",
    },
    {
      id: 3,
      firstname: "daisy",
      lastname: "yoh",
    },
    {
      id: 4,
      firstname: "tiffany",
      lastname: "yoh",
    }
  ]
  res.send(data)
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))