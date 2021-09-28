const router = require('express').Router();
const sequelize = require('../config/connection');
const { Prop, Post, User } = require('../models');
const { withAuth, isadmin } = require('../utils/auth');



router.get('/', withAuth, (req, res) => {
  //  res.json({test: "message"});
   console.log(req.session);
   console.log('======================');
   Prop.findAll({
     where: {
       user_id: req.session.user_id
     },
     attributes: [
       'id',
       'branch_address',
       'branch_name',
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
     .then(dbPropData => {
       const props = dbPropData.map(prop => prop.get({ plain: true }));
       res.render('bank', { props, loggedIn: true });
     })
     .catch(err => {
       console.log(err);
       res.status(500).json(err);
     });
  });

  router.get('/bank/edit/:id', withAuth, (req, res) => {
    Prop.findByPk(req.params.id, {
      attributes: [
        'id',
        'branch_address',
        'branch_name',
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
      .then(dbPropData => {
        if (dbPropData) {
          const prop = dbPropData.get({ plain: true });
          
          res.render('edit-bank', {
            prop,
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

  // Get all bank API
  module.exports =router;