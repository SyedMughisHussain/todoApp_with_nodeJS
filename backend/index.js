const express = require('express')
const app = express()
const port = 3000

app.get('/api/v1/todos', (req, res) => {
  res.send([
    {
      id: 1,
      title: 'Todo 1',
    },
    {
      id: 2,
      title: 'Todo 2',
    },
    {
      id: 3,
      title: 'Todo 3',
    },
    {
      id: 4,
      title: 'Todo 4',
    },
    {
      id: 5,
      title: 'Todo 5',
    }
  ])
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})