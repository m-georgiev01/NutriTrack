import { FoodTable } from '../foods/food-table/FoodTable';
import { useState } from 'react';
import { SearchBar } from '../search-bar/SearchBar';
import { getFoodsBySearchParam } from '../../services/food-service';

export function Main() {
  const [foods, setFoods] = useState([]);
  const [selectedFoods, setSelectedFoods] = useState([]);

  function addFoodToSelected(id) {
    const food = foods.find((f) => f.id === id);
    setSelectedFoods((prevSelectedFoods) => {
      if (prevSelectedFoods.some((f) => f.id === id)) {
        return prevSelectedFoods;
      }

      return [...prevSelectedFoods, food];
    });
  }

  function deleteSelectedFood(id) {
    setSelectedFoods((prevSelectedFoods) =>
      prevSelectedFoods.filter((f) => f.id !== id)
    );
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
