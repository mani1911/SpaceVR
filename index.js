import express from 'express'
import path from 'path';
const __dirname = path.resolve()
const app = express()
const port = 3000

const dirname = __dirname + '/public'
app.use("/", express.static(dirname));

app.get('/', (req, res) => {
    res.sendFile(path.join(dirname + '/templates/index.html'))    
  })

app.get('/vr', (req, res) => {
  res.sendFile(path.join(dirname + '/templates/vr.html'))    
})
app.get('/vr2', (req, res) => {
  res.sendFile(path.join(dirname + '/templates/vr2.html'))    
})
app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})