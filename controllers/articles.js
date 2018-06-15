const db = require("../models/articles");
//methods
module.exports = {
  findAll: function(req, res) {
    return db.Articles.findAll({})
      .sort({ date: -1 })
      .then(data => {
        res.json(data);
      })
      .catch(error => {
        console.log(error);
      });
  },
  findById: function(req, res) {
    db.Articles.findById({ _id: req.params.id })
      .then(data => res.json(data))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Articles.create(req.body)
      .then(data => res.json(data))
      .catch(err => res.status(422).json(err));
  },
  delete: function(req, res) {
    db.Articles.findById({ _id: req.params.id })
      .then(data => data.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
};
