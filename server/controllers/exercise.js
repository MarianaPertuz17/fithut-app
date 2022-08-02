const Exercise = require('../models/exercise')

exports.getExercises = async (req, res) => {
  try {
    const exercises = await Exercise.find({bodyTarget: req.params.bodyPart})
    res.status(200).send({res: exercises, error: false});
  } catch (e) {
    res.status(500).send({res: 'Cound not get exercises', error: true});
  }
}
