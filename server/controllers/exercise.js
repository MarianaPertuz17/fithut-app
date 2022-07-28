const Exercise = require('../models/exercise')

// exports.postExercise = async (req, res) => {
//   console.log(req.body, 'boy')
//   try {
//     const newExercise = await Exercise.insertMany();
//     res.status(201).send({res: newExercise , error: false});
//   } catch (e) {
//     res.status(500).send({res: 'Cound not post Exercise', error: true});
//   }
// };

exports.getExercises = async (req, res) => {
  try {
    const exercises = await Exercise.find({bodyTarget: req.params.bodyPart})
    // const exercises = await Exercise.aggregate([
    //   {$match: {bodyTarget: req.params.bodyPart}},
    //   {$sample: {size: 12}}, 
    // ]) Buen metodo pero no es adecuado para la forma en la que estoy manejando en el front
    
    
    res.status(200).send({res: exercises, error: false});
    
  } catch (e) {
    res.status(500).send({res: 'Cound not get exercises', error: true});
  }
}
