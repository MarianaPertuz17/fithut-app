const mongoose = require('mongoose');

const uri = 'mongodb://127.0.0.1:27017/fithut';

mongoose.connect(uri,  { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

db.once('open', () => console.log('db connected'));

module.exports = mongoose;