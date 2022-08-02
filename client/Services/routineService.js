import { url } from "../Config";

export const routineService = {};

routineService.getRoutines = (userId) => {
  return fetch(`${url}/routines/${userId}`)
          .then(res => res.json())
          .then(data => data)
          .catch(e => e);
}

routineService.postRoutine = (routine, userId) => {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({routine, userId})
  }; 

  return fetch(`${url}/routines`, requestOptions)
          .then(res => res.json())
          .then(data => data)
          .catch(e => e);
}
