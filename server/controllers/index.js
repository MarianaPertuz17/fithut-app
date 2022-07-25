const User = require('../models/user');

exports.getUser = async (req, res) => {
  try {
    const response = await User.find(); //hay que cambiar por findById
    res.status(200).send({res: response, error: false});
  } catch (e) {
    res.status(500).send({res: 'Server error', error: true});
  }
};


exports.postUser = async (req, res) => {
  try {
    const { userName, email, password, equipment } = req.body;
    const newUser = await User.create({ userName, email, password, equipment });
    res.status(201).send({res: newUser , error: false});
  } catch (e) {
    res.status(500).send({res: 'Cound not post User', error: true});
  }
};


exports.putEquipment = async (req, res) => {
  try {
    const { equipment } = req.body;
    const updatedUser = await User.findOneAndUpdate({id : req.params.id}, {$set: {equipment: equipment}})
    res.status(201).send({res: updatedUser , error: false});
  } catch (e) {
    res.status(500).send({res: 'Cound not update equipment for user', error: true});
  }
};
