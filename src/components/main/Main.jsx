import './Main.css';
import { FoodTable } from '../foods/food-table/FoodTable';
import { useState } from 'react';
import { SearchBar } from '../search-bar/SearchBar';
import { FoodForm } from '../foods/food-form/FoodForm';

export function Main() {
  const [foods, setFoods] = useState([
    {
      id: 1,
      name: 'Apple',
      calories: 95,
      protein: 0.5,
      carbs: 25,
      fat: 0.3,
      fiber: 4.4,
    },
    {
      id: 2,
      name: 'Banana',
      calories: 105,
      protein: 1.3,
      carbs: 27,
      fat: 0.4,
      fiber: 3.1,
    },
    {
      id: 3,
      name: 'Chicken Breast (Boneless, Skinless)',
      calories: 165,
      protein: 31,
      carbs: 0,
      fat: 3.6,
      fiber: 0,
    },
    {
      id: 4,
      name: 'Salmon (Wild-caught)',
      calories: 233,
      protein: 25,
      carbs: 0,
      fat: 14,
      fiber: 0,
    },
    {
      id: 5,
      name: 'Brown Rice (Cooked)',
      calories: 218,
      protein: 4.5,
      carbs: 45,
      fat: 1.6,
      fiber: 3.5,
    },
  ]);

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

  return (
    <div className="main-container">
      <FoodForm />
      <FoodTable
        isSelected
        foods={selectedFoods}
        handleDelete={deleteSelectedFood}
      />
      <SearchBar />
      <FoodTable foods={foods} handleSelection={addFoodToSelected} />
    </div>
  );
}
