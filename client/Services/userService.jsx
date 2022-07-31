export const userService = {};

const url = 'http://192.168.1.17:5002';

userService.getUser = () => {
  return fetch(`${url}/users`)
          .then(res => res.json())
          .then(data => data)
          .catch(e => e);
}

userService.putEquipment = (id, equipment) => {
  const requestOptions = {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({equipment}) //enviar equipment
  }; 

  return fetch(`${url}/users/${id}/equipment`, requestOptions)
          .then(res => res.json())
          .then(data => data)
          .catch(e => e);
}

userService.getExercises = (bodyPart, equipment) => {
  return fetch(`${url}/exercises/${bodyPart}`)
          .then(res => res.json())
          .then(data => data)
          .catch(e => e);
}

userService.getRoutines = (userId) => {
  return fetch(`${url}/routines/${userId}`)
          .then(res => res.json())
          .then(data => data)
          .catch(e => e);
}

userService.postRoutine = (routine, userId) => {

  console.log('tratando de enviar2', routine, userId)
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({routine, userId}) //enviar routine
  }; 

  return fetch(`${url}/routines`, requestOptions)
          .then(res => res.json())
          .then(data => data)
          .catch(e => e);
}
