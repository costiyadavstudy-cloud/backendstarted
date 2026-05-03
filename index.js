import express from  'express'
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/login', (req, res) => {
  res.send("well you are in login so you should be hapy aren' you")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
