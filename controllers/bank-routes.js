const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User } = require('../models');

//get  banks
router.get('/', (req, res) => {
    console.log('======================');
    Post.findAll({
      attributes: [
        'id',
        'branch_address',
        'branch_name',
        'created_at',
       ],
      include: [
        {
          model: User,
          attributes: ['username']
        }
      ]
    })
    .then(dbPostData => {
        const posts = dbPostData.map(post => post.get({ plain: true }));
        res.render('bank', { posts, loggedIn: true });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });
  router.get('/bank/edit/:id', withAuth, (req, res) => {
    Post.findByPk(req.params.id, {
      attributes: [
        'id',
        'branch_address',
        'branch_name',
        'branch_number',
        'created_at',
      ],
      include: [
        {
          model: User,
          attributes: ['username']
        }
      ]
    })
      .then(dbPostData => {
        if (dbPostData) {
          const post = dbPostData.get({ plain: true });
          
          res.render('edit-bank', {
            post,
            loggedIn: true
          });
        } else {
          res.status(404).end();
        }
      })
      .catch(err => {
        res.status(500).json(err);
      });
  });
  
  module.exports = router;

  router.get()

  // Get all bank API

  const settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://community-worldbank.p.rapidapi.com/datacatalog?format=json",
    "method": "GET",
    "headers": {
      "x-rapidapi-host": "community-worldbank.p.rapidapi.com",
      "x-rapidapi-key": "7bed7814b1msh7590e278819b7e1p19d6d8jsndd2590b33c1c"
    }
  };
  
  $.ajax(settings).done(function (response) {
    console.log(response);
  });
  module.exports =router;