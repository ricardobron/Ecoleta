import express from 'express'

const app = express()

app.get('/users', (req, res) => {
  return res.json({ ok: true})
})

app.listen(3333, () => {
  console.log("RODANDO NA PORTA 3333")
})