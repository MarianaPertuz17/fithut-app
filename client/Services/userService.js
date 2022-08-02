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

