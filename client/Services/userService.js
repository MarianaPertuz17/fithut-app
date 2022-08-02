import { url } from "../Config";

export const userService = {};

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
    body: JSON.stringify({equipment})
  }; 

  return fetch(`${url}/users/${id}/equipment`, requestOptions)
          .then(res => res.json())
          .then(data => data)
          .catch(e => e);
}


userService.updateUser = (id, premium) => {
  console.log('i am me', id, premium)
  const requestOptions = {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({premium})
  }; 

  return fetch(`${url}/users/${id}`, requestOptions)
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
  console.log(userId, 'id adentro')
  return fetch(`${url}/routines/${userId}`)
          .then(res => res.json())
          .then(data => data)
          .catch(e => e);
}

userService.postRoutine = (routine, userId) => {
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
