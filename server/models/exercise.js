const mongoose = require('.');

const exerciseSchema = mongoose.Schema({
  bodyPart: {type:String},
  bodyTarget: {type:String},
  equipment: {type:String},
  gifUrl: {type:String},
  id:{type:String},
  name: {type:String},
  target: {type:String},
  sets: {type: Number},
  reps: {type: Number}
});

module.exports = mongoose.model('exercises', exerciseSchema);