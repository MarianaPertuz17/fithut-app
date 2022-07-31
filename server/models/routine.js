const mongoose = require('.');

const routineSchema = mongoose.Schema({
  userId: {type:String},
  exercises: {type:Array}
}, {timestamps: true});

module.exports = mongoose.model('routines', routineSchema);