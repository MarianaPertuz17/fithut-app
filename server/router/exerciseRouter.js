const exerciseRouter = require('express').Router();
const { postExercise, getExercises } = require('../controllers/exercise');

// exerciseRouter.post('/', postExercise);
exerciseRouter.get('/:bodyPart', getExercises);



exports.exerciseRouter = exerciseRouter;