const Routine = require('../models/routine');


exports.getRoutine = async (req, res) => {
  try {
    const routines = await Routine.findById({userId: '62de1ccafceacff8700e6722'}); //hay que cambiar por findById
    res.status(200).send({res: routines, error: false});
  } catch (e) {
    res.status(500).send({res: 'Server error', error: true});
  }
};


exports.postRoutine = async (req, res) => {
  try {
    const { routine, userId } = req.body;
    console.log('posting routine', routine, userId)
    const newRoutine = await Routine.create({ exercises: routine, userId });
    res.status(201).send({res: newRoutine , error: false});
  } catch (e) {
    res.status(500).send({res: 'Cound not post User', error: true});
  }
};
