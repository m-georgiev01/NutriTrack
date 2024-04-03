import { FoodTable } from '../foods/food-table/FoodTable';
import { useEffect, useState } from 'react';
import { SearchBar } from '../search-bar/SearchBar';
import {
  addSelectedFood,
  getFoodsBySearchParam,
  getSelectedFoods,
  removeSelectedFood,
} from '../../services/food-service';

export function Main() {
  const [foods, setFoods] = useState([]);
  const [selectedFoods, setSelectedFoods] = useState([]);

  useEffect(() => {
    getSelectedFoods().then((res) => {
      setSelectedFoods(res.data);
    });
  }, []);

  function addFoodToSelected(id) {
    const food = foods.find((f) => f.id === id);

    if (!selectedFoods.some((f) => f.id === food.id)) {
      addSelectedFood(food).then(() => {
        setSelectedFoods((prevSelectedFoods) => {
          return [...prevSelectedFoods, food];
        });
      });
    }
  }

  function deleteSelectedFood(id) {
    removeSelectedFood(id).then(() => {
      setSelectedFoods((prevSelectedFoods) =>
        prevSelectedFoods.filter((f) => f.id !== id)
      );
    });
  }

  function searchDb(e) {
    const inputValue = e.target.value;

    if (inputValue.length >= 2) {
      getFoodsBySearchParam(e.target.value)
        .then((res) => {
          setFoods(res);
        })
        .catch((err) => {
          console.error('Error:', err);
        });
    } else {
      setFoods([]);
    }
  }

  return (
    <div className="p-4">
      <FoodTable
        isSelected
        foods={selectedFoods}
        handleDelete={deleteSelectedFood}
      />
      <SearchBar handleSearch={searchDb} />
      <FoodTable foods={foods} handleSelection={addFoodToSelected} />
    </div>
  );
}
