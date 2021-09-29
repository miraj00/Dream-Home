const router = require('express').Router();
const sequelize = require('../config/connection');
const { ReachOut, User } = require('../models/');



router.get('/', (req, res) => {
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
        res.render('lawyer', { posts, loggedIn: true });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
   });





router.post('/', (req, res) => {
    ReachOut.create({
        your_name: req.body.your_name,
        your_contact_number: req.body.your_contact_number,
        your_message: req.body.your_message
    })
    .then(userMessage => res.json(userMessage))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});








module.exports = router;