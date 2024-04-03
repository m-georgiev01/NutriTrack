import axios from 'axios';

const apiUrl = 'http://localhost:3001';

export function getFoodsBySearchParam(searchedParam) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      axios
        .get(`${apiUrl}/foods/${searchedParam}`)
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          reject(error);
        });
    }, 200);
  });
}

export function createFood(food) {
  return axios.post(`${apiUrl}/foods`, food);
}

export function getSelectedFoods() {
  return axios.get(`${apiUrl}/selected-foods`);
}

export function addSelectedFood(selectedFood) {
  return axios.post(`${apiUrl}/selected-foods`, selectedFood);
}

export function removeSelectedFood(id) {
  return axios.delete(`${apiUrl}/selected-foods/${id}`);
}
