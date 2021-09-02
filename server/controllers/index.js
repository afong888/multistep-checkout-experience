const models = require('../models');

module.exports = {
  postInformation: (req, res) => {
    models.postInformation(req.body, (err, data) => {
      if (err) {
        res.status(501).send(err);
      } else {
        res.send(data);
      }
    })
  }
}