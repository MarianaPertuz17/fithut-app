import { url } from "../Config";

export const exerciseService = {};

exerciseService.getExercises = (bodyPart, equipment) => {
  return fetch(`${url}/exercises/${bodyPart}`)
          .then(res => res.json())
          .then(data => data)
          .catch(e => e);
}