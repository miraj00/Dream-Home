
const router = require("express").Router();
const sequelize = require("../config/connection");
const axios = require("axios");
const { Post, User } = require("../models");

// get all posts for homepage
router.get("/", (req, res) => {
 
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
        attributes: ["username"],
      },
    ],
  })
    .then((dbPostData) => {
      const posts = dbPostData.map((post) => post.get({ plain: true }));

      res.render("homepage", {
        posts,
        loggedIn: req.session.loggedIn, 
        showContactForm: true
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// get all posts for homepage
router.get("/", (req, res) => {
 
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
        attributes: ["username"],
      },
    ],
  })
    .then((dbPostData) => {
      const posts = dbPostData.map((post) => post.get({ plain: true }));

      res.render("homepage", {
        posts,
        loggedIn: req.session.loggedIn, 
        showContactForm: true
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }

  res.render("login");
});


// <-!-----------------------------------------------api call to get all houses for sale to rapid api route-------------------------------------------------------!----->
router.post("/api/forsale", (req, res) => {


  const options = {
    method: "GET",
    url: "https://realty-in-us.p.rapidapi.com/properties/list-for-sale",
    params: {
      state_code: req.body.location,
      city: req.body.city,
      offset: "0",
      limit: "50",
      sort: "relevance",
    },
    headers: {
      "x-rapidapi-host": "realty-in-us.p.rapidapi.com",
      "x-rapidapi-key": "08562a1b1dmshf82179cca44477fp10ecc8jsne681467a1cc5",
    },
  };

  axios
    .request(options)
    .then(function (response) {
      res.send(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
});

router.get("/forsale", (req, res) => {
  
  const options = {
    method: "GET",
    url: "https://realty-in-us.p.rapidapi.com/properties/list-for-sale",
    params: {
      state_code: "NY",
      city: "bronx",
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
      res.render("houses", { property: response.data.listings });
    })
    .catch(function (error) {
      console.error(error);
    });
});

router.get('/message-received', (req, res) => {
  res.render('confirmationReceived');
});


module.exports = router;
