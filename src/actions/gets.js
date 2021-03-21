import api from '../services/api';

export async function getCharacter() {
  const { data } = await api.get('/character');
  const { results = [] } = data;
  
  return results
}

export async function getLocation() {
  const { data } = await api.get('./locations');
  const { results = [] } = data;
}