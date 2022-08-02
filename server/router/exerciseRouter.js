const exerciseRouter = require('express').Router();
const { getExercises } = require('../controllers/exercise');

exerciseRouter.get('/:bodyPart', getExercises);

exports.exerciseRouter = exerciseRouter;