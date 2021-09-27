// import all models
const Post = require('./Post');
const User = require('./User');
const ReachOut = require('./ReachOut');




// create associations
User.hasMany(Post, {
  foreignKey: 'user_id'
});

Post.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL'
});

// User.hasMany(ReachOut, {
//   foreignKey: 'user_id'
// });




module.exports = { User, Post, ReachOut };
