const express = require('express')
const app = express()
const port = 3000
const path = require('path');
const controllers = require('./controllers');
const models = require('./models')

const staticPath = path.join(__dirname, '..', 'public');
app.use(express.static(staticPath));

app.use((req, res, next) => {
  console.log('-----------------------------');
  console.log(req.body);
  console.log(req.method);
  console.log(req.url);
  console.log('-----------------------------');
  next();
})

app.post('/api/checkout', controllers.postInformation);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})