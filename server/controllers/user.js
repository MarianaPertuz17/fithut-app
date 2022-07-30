const User = require('../models/user');


exports.getUser = async (req, res) => {
  try {
    const response = await User.findById({_id: '62de1ccafceacff8700e6722'}); //hay que cambiar por findById
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
    const updatedUser = await User.findOneAndUpdate({id : req.params.id}, {$set: {equipment: equipment}}, {new: true})
    res.status(201).send({res: equipment , error: false});
  } catch (e) {
    res.status(500).send({res: 'Cound not update equipment for user', error: true});
  }
};
