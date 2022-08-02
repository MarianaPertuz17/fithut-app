const Routine = require('../models/routine');


exports.getRoutine = async (req, res) => {
  try {
    const routines = await Routine.find({userId: req.params.userId}); //hay que cambiar por findById
    res.status(200).send({res: routines, error: false});
  } catch (e) {
    res.status(500).send({res: 'Server error', error: true});
  }
};


exports.postRoutine = async (req, res) => {
  try {
    const { routine, userId } = req.body;
    const newRoutine = await Routine.create({ exercises: routine, userId });
    res.status(201).send({res: newRoutine , error: false});
  } catch (e) {
    res.status(500).send({res: 'Cound not post routine', error: true});
  }
};
