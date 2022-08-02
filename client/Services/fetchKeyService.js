import { url } from "../Config";

export const fetchKeyService = {};

fetchKeyService.getKey = () => {
  return fetch(`${url}/stripe`)
          .then(res => res.json())
          .then(data => data)
          .catch(e => e);
}