const express = require('express');
const app = express()
const PORT = process.env.PORT || 5000

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

const users = [
    {id:1, name:"Rimon Khan", email:"rimonkhan@gmail.com"},
    {id:2, name:"Rimon", email:"rimon@gmail.com"},
    {id:3, name:"Khan", email:"khan@gmail.com"}
]

app.get('/users', (req, res) => {
  res.send(users)
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})