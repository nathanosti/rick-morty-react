import api from '../services/api';

import { TYPES } from '../store/types'
const { GET_CHARACTERS } = TYPES

// export async function getCharacter() {
//   const { data } = await api.get('/character');
//   const { results = [] } = data;
  
//   return results
// }

// export async function getLocation() {
//   const { data } = await api.get('./locations');
//   const { results = [] } = data;
// }

export function getCharacters() {
  return async (dispatch) => {
    const { data } = await api.get('/character')
    const { results = [] } = data

    dispatch({ type: GET_CHARACTERS, payload: results })
  }
}