const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User } = require('../models');
const withAuth = require('../utils/auth');


router.get('/bank', withAuth, (req, res) => {
 //  res.json({test: "message"});
  console.log(req.session);
  console.log('======================');
  Post.findAll({
    where: {
      user_id: req.session.user_id
    },
    attributes: [
      'id',
      'office_address',
      'office_name',
      'contact_number',
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


// get all posts for dashboard-bank
router.get('/', withAuth, (req, res) => {
  console.log(req.session);
  console.log('======================');
  Post.findAll({
    where: {
      user_id: req.session.user_id
    },
    attributes: [
      'id',
      'office_address',
      'office_name',
      'contact_number',
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
      res.render('dashbanl', { posts, loggedIn: true });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});


router.get('/edit/:id', withAuth, (req, res) => {
  Post.findByPk(req.params.id, {
    attributes: [
      'id',
      'office_address',
      'office_name',
      'contact_number',
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

router.get("/bank-routes", (req, res) => {

    const settings = {
      "async": true,
      "crossDomain": true,
      "url": "https://community-worldbank.p.rapidapi.com/datacatalog?format=json",
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "community-worldbank.p.rapidapi.com",
       "x-rapidapi-key": "7bed7814b1msh7590e278819b7e1p19d6d8jsndd2590b33c1c",
     }
    }
    
    $.ajax(settings).done(function (response) {
      console.log(response);
    });
  });
    module.exports =router;
 module.exports = router;