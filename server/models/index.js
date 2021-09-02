const db = require('../../database');

module.exports = {
  postInformation: (form, collection, callback) => {
    db.collection(`${collection}`).insertMany([form])
  }
}