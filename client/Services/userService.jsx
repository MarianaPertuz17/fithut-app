export const userService = {};

const url = 'http://192.168.1.32:5002';

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

