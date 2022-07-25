const mongoose = require('.');

const userSchema = mongoose.Schema({
  userName: {type: String, default:'Mariana'},
  email: {type: String, default:'marianapertuzv@gmail.com'},
  password: {type: String, default:'12345'},
  equipment: {type: Array, default:[]}
});

module.exports = mongoose.model('users', userSchema);