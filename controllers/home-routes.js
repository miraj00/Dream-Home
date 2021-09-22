const router = require('express').Router();
const sequelize = require('../config/connection');
const axios = require('axios');
const { Post, User } = require('../models');

// get all posts for homepage
router.get('/', (req, res) => {
  console.log('======================');
  Post.findAll({
    attributes: [
      'id',
      'office_address',
      'office_name',
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

      res.render('homepage', {
        posts,
        loggedIn: req.session.loggedIn
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});



// get all posts for homepage
router.get('/', (req, res) => {
  console.log('======================');
  Post.findAll({
    attributes: [
      'id',
      'office_address',
      'office_name',
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

      res.render('homepage', {
        posts,
        loggedIn: req.session.loggedIn
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});


router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});




// <-!-----------------------------------------------getting house for sale route-------------------------------------------------------!----->


router.get('/forsale', (req, res) => {  
  console.log("hey there");
  console.log(req.body)
  const options = {
    method: "GET",
    url: "https://realty-in-us.p.rapidapi.com/properties/list-for-sale",
    params: {
      state_code: "NY",
      city: "New York City",
      offset: "0",
      limit: "20",
      sort: "relevance",
    },
    headers: {
      "x-rapidapi-host": "realty-in-us.p.rapidapi.com",
      "x-rapidapi-key": "46c4c85120mshb128887db4ffa70p145b34jsn9d69bb1b5a1f",
    },
  };

  axios
    .request(options)
    .then(function (response) {
      console.log(response.data.listings[0]);
      res.render("houses", { property: response.data.listings });
    })
    .catch(function (error) {
      console.error(error);
    });
})
module.exports = router;
