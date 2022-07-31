const routineRouter = require('express').Router();
const { getRoutine, postRoutine } = require('../controllers/routine');

routineRouter.get('/:userId', getRoutine);
routineRouter.post('/', postRoutine);



exports.routineRouter = routineRouter;