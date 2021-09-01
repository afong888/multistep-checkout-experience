const express = require('express')
const app = express()
const port = 3000
const path = require('path');

const staticPath = path.join(__dirname, '..', 'public');
app.use(express.static(staticPath));

app.use((req, res, next) => {
  console.log('-----------------------------');
  console.log(req.body);
  console.log(req.method);
  console.log(req.url);
  console.log('-----------------------------');
})

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})