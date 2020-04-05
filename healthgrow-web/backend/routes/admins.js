const router = require('express').Router();
let Admin = require('../models/admin.model');

router.route('/').get((req, res) => {
  Admin.find()
    .then(admins => res.json(admins))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const email = req.body.email;

  const newAdmin = new Admin({email});

  newAdmin.save()
    .then(() => res.json('Admin added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;