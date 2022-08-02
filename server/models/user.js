const mongoose = require('.');

const userSchema = mongoose.Schema({
  userName: {type: String},
  email: {type: String},
  password: {type: String},
  equipment: {type: Array},
  premium: {type: Boolean, default:false}
});

module.exports = mongoose.model('users', userSchema);