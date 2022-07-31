const exerciseRouter = require('express').Router();
const { postExercise, getExercises, updateExercise} = require('../controllers/exercise');

// exerciseRouter.post('/', postExercise);
exerciseRouter.get('/:bodyPart', getExercises);
exerciseRouter.put('/', updateExercise);



exports.exerciseRouter = exerciseRouter;