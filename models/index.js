// import all models
const Post = require('./Post');
const User = require('./User');
const Prop = require('./Prop');





// create associations
User.hasMany(Post, {
  foreignKey: 'user_id'
});

Post.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL'
});
// bank associateions
User.hasMany(Prop,{
  foreignKey: 'user_id'
});

Prop.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL'
});

module.exports = { User, Post, Prop};
