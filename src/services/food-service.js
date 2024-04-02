import axios from 'axios';

const apiUrl = 'http://localhost:3001/foods';

export function getFoodsBySearchParam(searchedParam) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      axios
        .get(apiUrl + '/' + searchedParam)
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
  return axios.post(apiUrl, food);
}
